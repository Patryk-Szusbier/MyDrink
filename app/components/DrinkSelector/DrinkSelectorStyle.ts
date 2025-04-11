import { StyleSheet } from "react-native";

const DrinkSelectorStyle = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DFCFCF",
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
  selectedContainer: {
    backgroundColor: "#46324D",
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
