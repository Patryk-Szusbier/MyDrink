import { StyleSheet } from "react-native";

const SendButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#7D8CA3",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    minWidth: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E8DCB9",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
  },
});

export default SendButtonStyle;
