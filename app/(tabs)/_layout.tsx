import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#484C69",
          borderRadius: 25,
          height: 60,
          position: "absolute",
          bottom: 15,
          left: "10%",
          right: "10%",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#fff",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 6,
          elevation: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="bluetoothConnect"
        options={{
          title: "Device",
          headerShown: false,
          tabBarIcon: ({ focused }: any) => (
            <MaterialIcons
              name="devices"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: "white",
        }}
      />
    </Tabs>
  );
};

export default _Layout;
