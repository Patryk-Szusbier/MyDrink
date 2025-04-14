import React from "react";
import {
  TouchableOpacity,
  View,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

const CustomTabBarButton = ({
  children,
  onPress,
  accessibilityState,
}: BottomTabBarButtonProps) => {
  const focused = accessibilityState?.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          backgroundColor: focused ? "#F1AA9B" : "transparent",
          borderRadius: 20,
          padding: 8,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;
