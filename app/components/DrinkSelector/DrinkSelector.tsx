import React from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import DrinkSelectorStyle from "./DrinkSelectorStyle";

interface DrinkSelectorProps {
  title: string;
  selectedDrink: string;
  setSelectedDrink: (drink: string) => void;
  drinkOptions: string[];
  drinkNames: string[];
}

const DrinkSelector: React.FC<DrinkSelectorProps> = ({
  title,
  selectedDrink,
  setSelectedDrink,
  drinkOptions,
  drinkNames,
}) => {
  return (
    <>
      <Text style={DrinkSelectorStyle.radioButtonLabel}>{title}</Text>
      <RadioButton.Group onValueChange={setSelectedDrink} value={selectedDrink}>
        <View style={DrinkSelectorStyle.radioButtonRow}>
          {drinkOptions.map((option, index) => (
            <View key={option} style={DrinkSelectorStyle.radioButtonContainer}>
              <RadioButton.Item
                label={drinkNames[index]}
                value={option}
                labelStyle={DrinkSelectorStyle.radioButtonLabel}
              />
            </View>
          ))}
        </View>
      </RadioButton.Group>
    </>
  );
};

export default DrinkSelector;
