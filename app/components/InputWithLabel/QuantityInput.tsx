import React from "react";
import { Text, TextInput, TextInputProps } from "react-native";
import QuantityInputStyle from "./QuantityInputStyle";

interface QuantityInputProps extends TextInputProps {
  title: string;
  ml: string;
  setMl: (text: string) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  title,
  ml,
  setMl,
  ...rest
}) => {
  const handleTextChange = (text: string) => {
    const numeric = text.replace(/[^0-9]/g, "");
    const value = parseInt(numeric || "0", 10);

    if (value <= 1000) {
      setMl(numeric);
    } else {
      setMl("1000");
    }
  };
  return (
    <>
      <Text style={QuantityInputStyle.text}>{title}</Text>
      <TextInput
        style={QuantityInputStyle.input}
        keyboardType="numeric"
        value={ml}
        onChangeText={handleTextChange}
        placeholder="np. 500"
        placeholderTextColor={"#AAA"}
        {...rest}
      />
    </>
  );
};

export default QuantityInput;
