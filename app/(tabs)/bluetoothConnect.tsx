import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyle from "../GlobalStyle";
import Toast from "react-native-toast-message";
import BluetoothScanner from "../components/Bluetooth/BluetoothScaner";

const BluetoothConnect = () => {
  return (
    <>
      <View style={globalStyle.container}>
        <Toast />
        <BluetoothScanner />
      </View>
    </>
  );
};

export default BluetoothConnect;

const styles = StyleSheet.create({});
