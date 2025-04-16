import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48426D",
    margin: 0,
    padding: 10,
    paddingBottom: 120,
    flexDirection: "column",
    color: "white",
  },
  regularText: {
    color: "#F0C38E",
    fontFamily: "Caudex-Regular",
    textAlign: "center",
  },

  secondaryText: {
    color: "#F1AA9B",
    fontFamily: "Caudex-Regular",
    textAlign: "center",
  },
  button: {
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
});

export default globalStyle;
