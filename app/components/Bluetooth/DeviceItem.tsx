import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BluetoothClassic from "react-native-bluetooth-classic";
import { BleManager } from "react-native-ble-plx";
import Toast from "react-native-toast-message";
import { useBluetooth } from "@/app/hooks/BTProvider/BluetoothContext";
import globalStyle from "@/app/GlobalStyle";
import ScanenerStyles from "./ScanerStyle";

const manager = new BleManager();

// <- Podmień to na prawdziwe UUIDy serwisu i charakterystyki, jeśli masz
const SERVICE_UUID = "00001234-0000-1000-8000-00805f9b34fb";

const DeviceItem = ({ item }: any) => {
  const { setConnectedDevice, setWriteCharacteristic } = useBluetooth();

  const handleConnect = async () => {
    try {
      if (item.type === "classic") {
        await BluetoothClassic.cancelDiscovery();

        const connected = await BluetoothClassic.connectToDevice(item.id);

        if (connected) {
          setConnectedDevice(connected);
          Toast.show({
            type: "success",
            position: "top",
            text1: `✅ Połączono z klasycznym BT: ${item.name}`,
            visibilityTime: 3000,
          });
        } else {
          Toast.show({
            type: "error",
            position: "top",
            text1: `❌ Nie udało się połączyć z: ${item.name}`,
            visibilityTime: 3000,
          });
        }
      } else if (item.type === "ble") {
        const device = await manager.connectToDevice(item.id);
        await device.discoverAllServicesAndCharacteristics();

        const characteristics = await device.characteristicsForService(
          SERVICE_UUID
        );

        const writeChar = characteristics.find((c) => c.isWritableWithResponse);

        if (!writeChar) {
          Toast.show({
            type: "error",
            position: "top",
            text1: "❌ Brak charakterystyki do pisania!",
          });
          return;
        }

        setConnectedDevice(device);
        setWriteCharacteristic(writeChar);

        Toast.show({
          type: "success",
          position: "top",
          text1: `✅ Połączono przez BLE z: ${device.name}`,
          visibilityTime: 3000,
        });
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: `⚠️ Nieznany typ urządzenia: ${item.name}`,
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "top",
        text1: `❌ Błąd podczas łączenia z: ${item.name}`,
        text2: error instanceof Error ? error.message : JSON.stringify(error),
        visibilityTime: 3000,
      });
      console.warn("Błąd podczas łączenia z:", item.name, error);
    }
  };

  return (
    <View style={ScanenerStyles.dataList}>
      <View style={{ flex: 1 }}>
        <Text style={globalStyle.secondaryText}>Nazwa: {item.name}</Text>
        <Text style={globalStyle.secondaryText}>
          {item.type === "ble" ? "ID" : "MAC"}: {item.id}
        </Text>
        {item.type === "ble" && (
          <Text style={globalStyle.secondaryText}>RSSI: {item.rssi}</Text>
        )}
      </View>
      <TouchableOpacity
        style={ScanenerStyles.ConButton}
        onPress={handleConnect}
      >
        <Text style={globalStyle.regularText}>Połącz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeviceItem;
