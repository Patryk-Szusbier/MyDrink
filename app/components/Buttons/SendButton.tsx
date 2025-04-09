import React from "react";
import { TouchableOpacity, Alert, Text } from "react-native";
import SendButtonStyle from "./SendButtonStyle";

interface SendButtonProps {
  selectedDrink: string;
  ml: string;
}

const SendButton: React.FC<SendButtonProps> = ({ selectedDrink, ml }) => {
  const sendCommand = async () => {
    if (!selectedDrink) {
      Alert.alert("Błąd", "Wybierz napój!");
      return;
    }
    if (!ml) {
      Alert.alert("Błąd", "Wprowadź ilość napoju!");
      return;
    }
    const command = `${selectedDrink}-${ml}`;
    // Tutaj dodaj kod do wysłania komendy przez Bluetooth
    Alert.alert("Sukces", `Wysłano: ${command}`);
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
