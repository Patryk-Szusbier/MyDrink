import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37323E",
    margin: 0,
    padding: 10,
    flexDirection: "column",
    color: "white",
  },
  text: {
    color: "white",
  },
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
});

export default globalStyle;
