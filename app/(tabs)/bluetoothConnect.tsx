import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyle from "../GlobalStyle";
import BluetoothScanner from "../components/BluetoothList/BluetoothScaner";

const BluetoothConnect = () => {
  return (
    <View style={globalStyle.container}>
      <BluetoothScanner />
    </View>
  );
};

export default BluetoothConnect;

const styles = StyleSheet.create({});
