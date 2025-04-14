import { Stack } from "expo-router";
import { BluetoothProvider } from "./hooks/BTProvider/BluetoothContext";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Zatrzymaj splash screen zanim załadują się czcionki
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Caudex-Regular": require("../assets/fonts/Caudex-Regular.ttf"),
        "Caudex-Bold": require("../assets/fonts/Caudex-Bold.ttf"),
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // lub custom loader
  }

  return (
    <BluetoothProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </BluetoothProvider>
  );
}
