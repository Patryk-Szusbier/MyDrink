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
  return (
    <>
      <Text style={QuantityInputStyle.text}>{title}</Text>
      <TextInput
        style={QuantityInputStyle.input}
        keyboardType="numeric"
        value={ml}
        onChangeText={setMl}
        placeholder="np. 500"
        {...rest}
      />
    </>
  );
};

export default QuantityInput;
