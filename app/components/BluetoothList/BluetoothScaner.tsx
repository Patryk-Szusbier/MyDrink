import React, { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { BleManager } from "react-native-ble-plx";
import BluetoothClassic from "react-native-bluetooth-classic";
import globalStyle from "@/app/GlobalStyle";
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
    manager.devices;
    // BLE SCAN
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.warn(error);
        return;
      }

      if (device && device.name) {
        setDevices((prev) => new Map(prev.set(device.id, device)));
      }
    });

    // CLASSIC BLUETOOH SCAN
    BluetoothClassic.getBondedDevices()
      .then((foundDevices) => {
        foundDevices.forEach((device) => {
          setDevices((prev) => new Map(prev.set(device.id, device)));
        });
      })
      .catch((error) =>
        console.warn("Error scanning for classic Bluetooth devices", error)
      );
    //TIMEOUT AFTER 10 SEC
    setTimeout(() => {
      manager.stopDeviceScan();
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
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBlockColor: "white",
              }}
            >
              <Text style={globalStyle.text}>Nazwa: {item.name}</Text>
              <Text style={globalStyle.text}>ID: {item.id}</Text>
              <Text style={globalStyle.text}>RSSI: {item.rssi}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default BluetoothScanner;
