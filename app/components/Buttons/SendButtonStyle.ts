import { StyleSheet } from "react-native";

const SendButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#484C69",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    minWidth: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#695D8B",
    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
  },
});

export default SendButtonStyle;
