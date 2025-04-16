import React from "react";
import { TouchableOpacity, Alert, Text } from "react-native";
import { Buffer } from "buffer";
import BluetoothClassic from "react-native-bluetooth-classic";
import SendButtonStyle from "./SendButtonStyle";
import { useBluetooth } from "@/app/hooks/BTProvider/BluetoothContext";

interface SendButtonProps {
  selectedDrink: string;
  ml: string;
}

const SendButton: React.FC<SendButtonProps> = ({ selectedDrink, ml }) => {
  const { connectedDevice, writeCharacteristic } = useBluetooth();

  const sendCommand = async () => {
    if (!selectedDrink) {
      Alert.alert("Błąd", "Wybierz napój!");
      return;
    }
    if (!ml) {
      Alert.alert("Błąd", "Wprowadź ilość napoju!");
      return;
    }

    if (!connectedDevice) {
      Alert.alert("Błąd", "Brak połączonego urządzenia!");
      return;
    }

    const command = `${selectedDrink}-${ml}`;

    try {
      if (connectedDevice.write) {
        // Bluetooth Classic
        await connectedDevice.write(command + "\n"); // \n często potrzebne
        Alert.alert("Sukces", `Wysłano przez BT Classic: ${command}`);
      } else if (writeCharacteristic) {
        // BLE
        const base64Command = Buffer.from(command).toString("base64");
        await writeCharacteristic.writeWithResponse(base64Command);
        Alert.alert("Sukces", `Wysłano przez BLE: ${command}`);
      } else {
        Alert.alert("Błąd", "Brak charakterystyki do zapisu (BLE)!");
      }
    } catch (error) {
      Alert.alert(
        "Błąd wysyłania",
        error instanceof Error ? error.message : JSON.stringify(error)
      );
      console.warn("❌ Błąd wysyłania komendy:", error);
    }
  };

  return (
    <TouchableOpacity
      style={SendButtonStyle.button}
      onPress={sendCommand}
      activeOpacity={0.5}
    >
      <Text style={SendButtonStyle.buttonText}>Wyślij</Text>
    </TouchableOpacity>
  );
};

export default SendButton;
