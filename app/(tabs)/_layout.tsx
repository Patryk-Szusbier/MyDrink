import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import CustomTabBarButton from "../hooks/CustomTabBarButton";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#312C51",
          borderRadius: 20,
          height: 50,
          position: "absolute",
          bottom: 15,
          left: "15%",
          right: "15%",
          shadowColor: "#fff",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -3 },
          shadowRadius: 6,
          elevation: 5,
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
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
              color={focused ? "#312C51" : "white"}
            />
          ),
          tabBarActiveTintColor: "#312C51",
          tabBarLabelStyle: {
            fontFamily: "Caudex-Bold",
          },
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
              color={focused ? "#312C51" : "white"}
            />
          ),
          tabBarActiveTintColor: "#312C51",
          tabBarLabelStyle: {
            fontFamily: "Caudex-Bold",
          },
        }}
      />
    </Tabs>
  );
};

export default _Layout;
