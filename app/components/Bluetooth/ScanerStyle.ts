import { StyleSheet } from "react-native";

const ScanenerStyles = StyleSheet.create({
  dataList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#695D8B",
    color: "#F1AA9B",
  },
  ConButton: {
    backgroundColor: "#F0C38E",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    minWidth: 60,
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

export default ScanenerStyles;
