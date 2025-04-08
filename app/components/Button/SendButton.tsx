import React from "react";
import { Button, Alert } from "react-native";

interface SendButtonProps {
  selectedDrink: string;
  ml: string;
}

const SendButton: React.FC<SendButtonProps> = ({ selectedDrink, ml }) => {
  const sendCommand = async () => {
    if (!selectedDrink) {
      Alert.alert("Błąd", "Wybierz napój!");
      return;
    }
    if (!ml) {
      Alert.alert("Błąd", "Wprowadź ilość napoju!");
      return;
    }
    const command = `${selectedDrink}-${ml}`;
    // Tutaj dodaj kod do wysłania komendy przez Bluetooth
    Alert.alert("Sukces", `Wysłano: ${command}`);
  };

  return <Button title="Wyślij" onPress={sendCommand} />;
};

export default SendButton;
