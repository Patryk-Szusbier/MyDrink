import { StyleSheet } from "react-native";

const ConectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  connected: { color: "#F0C38E", fontFamily: "Caudex-Regular" },
  notConnected: { color: "#F1AA9B", fontFamily: "Caudex-Regular" },
});

export default ConectionStyles;
