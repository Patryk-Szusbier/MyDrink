import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BluetoothClassic from "react-native-bluetooth-classic";
import { BleManager } from "react-native-ble-plx";
import globalStyle from "@/app/GlobalStyle";
import ScanenerStyles from "./ScanerStyle";
import Toast from "react-native-toast-message";
import { useBluetooth } from "@/app/hooks/BTProvider/BluetoothContext";

const manager = new BleManager();

const DeviceItem = ({ item }: any) => {
  const { setConnectedDevice } = useBluetooth();
  const handleConnect = async () => {
    try {
      if (item.type === "classic") {
        await BluetoothClassic.cancelDiscovery();
        const connected = await BluetoothClassic.connectToDevice(item.id);
        if (connected) {
          setConnectedDevice(connected);
          // Wyświetlamy komunikat toast przy udanym połączeniu
          Toast.show({
            type: "success",
            position: "top",
            text1: `✅ Połączono z klasycznym BT: ${item.name}`,
            visibilityTime: 3000,
          });
        } else {
          // Wyświetlamy komunikat toast przy nieudanym połączeniu
          Toast.show({
            type: "error",
            position: "top",
            text1: `❌ Nie udało się połączyć z klasycznym BT: ${item.name}`,
            visibilityTime: 3000,
          });
        }
      } else if (item.type === "ble") {
        const device = await manager.connectToDevice(item.id);
        await device.discoverAllServicesAndCharacteristics();
        setConnectedDevice(device);
        // Wyświetlamy komunikat toast przy udanym połączeniu BLE
        Toast.show({
          type: "success",
          position: "top",
          text1: `✅ Połączono przez BLE z: ${device.name}`,
          visibilityTime: 3000,
        });
      } else {
        // Wyświetlamy komunikat toast przy nieznanym typie urządzenia
        Toast.show({
          type: "error",
          position: "top",
          text1: `⚠️ Nieznany typ urządzenia: ${item.name}`,
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      // Wyświetlamy komunikat toast przy błędzie
      Toast.show({
        type: "error",
        position: "top",
        text1: `❌ Błąd podczas łączenia z: ${item.name}`,
        text2: error instanceof Error ? error.message : JSON.stringify(error),
        visibilityTime: 3000,
      });
      console.warn("❌ Błąd podczas łączenia z:", item.name, error);
    }
  };

  return (
    <View style={ScanenerStyles.dataList}>
      <View style={{ flex: 1 }}>
        <Text style={ScanenerStyles.text2}>Nazwa: {item.name}</Text>
        <Text style={ScanenerStyles.text2}>
          {item.type === "ble" ? "ID" : "MAC"}: {item.id}
        </Text>
        {item.type === "ble" && (
          <Text style={ScanenerStyles.text2}>RSSI: {item.rssi}</Text>
        )}
      </View>
      <TouchableOpacity
        style={ScanenerStyles.ConButton}
        onPress={handleConnect}
      >
        <Text style={ScanenerStyles.text}>Połącz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeviceItem;
