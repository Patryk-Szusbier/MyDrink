import React from "react";
import { Text, View } from "react-native";
import { useBluetooth } from "@/app/hooks/BTProvider/BluetoothContext"; // lub odpowiednia ścieżka
import ConectionStyles from "./ConectionStyles";

const ConnectionStatus = () => {
  const { connectedDevice } = useBluetooth();

  return (
    <View style={ConectionStyles.container}>
      <Text
        style={
          connectedDevice
            ? ConectionStyles.connected
            : ConectionStyles.notConnected
        }
      >
        {connectedDevice ? "Connected" : "Not Connected"}
      </Text>
    </View>
  );
};

export default ConnectionStatus;
