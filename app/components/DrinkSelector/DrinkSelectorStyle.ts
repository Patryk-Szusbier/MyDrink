import { StyleSheet } from "react-native";

const DrinkSelectorStyle = StyleSheet.create({
  title: {
    fontSize: 22,
    color: "#F0C38E",
    marginBottom: 4,
    textAlign: "center",
    fontFamily: "Caudex-Bold",
  },
  radioButtonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 10,
  },
  radioButtonContainer: {
    backgroundColor: "#312C51",
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
    backgroundColor: "#F0C38E",
  },
  radioButtonLabel: {
    fontSize: 12,
    color: "#F0C38E",
    fontWeight: "500",
    marginRight: 1,
    fontFamily: "Caudex-Regular",
  },
  selectedLabel: {
    fontWeight: "700",
    color: "#312C51",
    fontFamily: "Caudex-Bold",
  },
});

export default DrinkSelectorStyle;
