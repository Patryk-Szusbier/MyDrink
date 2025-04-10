import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
    margin: 0,
    padding: 10,
    flexDirection: "column",
    color: "white",
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#484C69",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    margin: 6,
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
});

export default globalStyle;
