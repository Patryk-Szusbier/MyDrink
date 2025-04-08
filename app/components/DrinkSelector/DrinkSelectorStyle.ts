import { StyleSheet } from "react-native";

const DrinkSelectorStyle = StyleSheet.create({
  radioButtonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  radioButtonContainer: {
    marginRight: 5,
    marginBottom: 8,
  },
  radioButtonLabel: {
    fontSize: 12,
  },
});

export default DrinkSelectorStyle;
