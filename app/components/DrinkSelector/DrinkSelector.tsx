import React from "react";
import { View, Text, Pressable } from "react-native";
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
      <Text style={DrinkSelectorStyle.title}>{title}</Text>
      <RadioButton.Group onValueChange={setSelectedDrink} value={selectedDrink}>
        <View style={DrinkSelectorStyle.radioButtonRow}>
          {drinkOptions.map((option, index) => {
            const isSelected = selectedDrink === option;
            return (
              <Pressable
                key={option}
                onPress={() => setSelectedDrink(option)}
                style={[
                  DrinkSelectorStyle.radioButtonContainer,
                  isSelected && DrinkSelectorStyle.selectedContainer,
                ]}
              >
                <Text
                  style={[
                    DrinkSelectorStyle.radioButtonLabel,
                    isSelected && DrinkSelectorStyle.selectedLabel,
                  ]}
                >
                  {drinkNames[index]}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </RadioButton.Group>
    </>
  );
};

export default DrinkSelector;
