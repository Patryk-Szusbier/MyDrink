import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import QuantityInput from "../components/InputWithLabel/QuantityInput";
import SendButton from "../components/Buttons/SendButton";

import DrinkSelector from "../components/DrinkSelector/DrinkSelector";
import globalStyle from "../GlobalStyle";
import Toast from "react-native-toast-message";

const drinkOptions = ["a", "b", "c", "d", "e", "f", "g", "h"];
const drinkNames = [
  "Pepsi",
  "Mirinda",
  "7UP",
  "Apple Juice",
  "Orange Juice",
  "Water",
  "Rockstar",
  "Lipton",
];

export default function Index() {
  const [ml, setMl] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");

  return (
    <View style={globalStyle.container}>
      <Toast />
      <DrinkSelector
        title={"Wybierz napój:"}
        selectedDrink={selectedDrink}
        setSelectedDrink={setSelectedDrink}
        drinkOptions={drinkOptions}
        drinkNames={drinkNames}
      />
      <QuantityInput
        title={"Wprowadź ilość napoju (ml):"}
        ml={ml}
        setMl={setMl}
      />
      <SendButton selectedDrink={selectedDrink} ml={ml} />
    </View>
  );
}
