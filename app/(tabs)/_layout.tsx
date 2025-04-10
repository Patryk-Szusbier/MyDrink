import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return <Feather name="home" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="bluetoothConnect"
        options={{
          title: "Device",
          headerShown: false,
          tabBarIcon: () => {
            return <MaterialIcons name="devices" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
};
export default _Layout;
