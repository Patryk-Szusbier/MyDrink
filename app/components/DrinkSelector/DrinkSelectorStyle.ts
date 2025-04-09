import { StyleSheet } from "react-native";

const DrinkSelectorStyle = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFC145",
    marginBottom: 4,
    textAlign: "center",
  },
  radioButtonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 10,
  },
  radioButtonContainer: {
    backgroundColor: "#7D8CA3",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    margin: 6,
    minWidth: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E8DCB9",
  },
  selectedContainer: {
    backgroundColor: "#499F68",
  },
  radioButtonLabel: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
    marginRight: 1,
  },
  selectedLabel: {
    fontWeight: "700",
    color: "#fff",
  },
});

export default DrinkSelectorStyle;
