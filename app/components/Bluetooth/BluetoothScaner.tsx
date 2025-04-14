import React, { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { BleManager } from "react-native-ble-plx";
import BluetoothClassic from "react-native-bluetooth-classic";
import globalStyle from "@/app/GlobalStyle";
import DeviceItem from "./DeviceItem";
import Toast from "react-native-toast-message";

const manager = new BleManager();

const BluetoothScanner = () => {
  const [devices, setDevices] = useState(new Map());
  const [scanningFinished, setScanningFinished] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
      }
    };

    requestPermissions();

    return () => {
      manager.destroy();
    };
  }, []);

  const startScan = async () => {
    setDevices(new Map());
    setScanningFinished(false);

    manager.startDeviceScan(null, null, (error, device) => {
      if (error) return console.warn(error);
      if (device && device.name) {
        const bleDevice = { ...device, type: "ble" };
        setDevices((prev) => new Map(prev.set(bleDevice.id, bleDevice)));
      }
    });

    try {
      const bonded = await BluetoothClassic.getBondedDevices();
      bonded.forEach((d) =>
        setDevices(
          (prev) => new Map(prev.set(d.id, { ...d, type: "classic-bonded" }))
        )
      );

      const discovered = await BluetoothClassic.startDiscovery();
      discovered.forEach((d) =>
        setDevices((prev) => new Map(prev.set(d.id, { ...d, type: "classic" })))
      );
    } catch (error) {
      Toast.show({
        type: "error",
        position: "top",
        text1: `❌ Błąd przy skanowaniu:"`,
        text2: error instanceof Error ? error.message : JSON.stringify(error),
        visibilityTime: 3000,
      });
    }

    setTimeout(() => {
      manager.stopDeviceScan();
      BluetoothClassic.cancelDiscovery();
      setScanningFinished(true);
    }, 10000);
  };

  return (
    <View>
      <TouchableOpacity
        style={globalStyle.button}
        onPress={startScan}
        activeOpacity={0.5}
      >
        <Text style={globalStyle.text}>Skanuj urządzenia Bluetooth</Text>
      </TouchableOpacity>

      {scanningFinished && devices.size === 0 ? (
        <Text style={{ marginTop: 20 }}>Brak urządzeń do wyświetlenia</Text>
      ) : (
        <FlatList
          data={Array.from(devices.values())}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DeviceItem item={item} />}
        />
      )}
      <Toast topOffset={20} position="top" />
    </View>
  );
};

export default BluetoothScanner;
