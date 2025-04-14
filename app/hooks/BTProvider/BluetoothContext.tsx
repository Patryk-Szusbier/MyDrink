import React, { createContext, useContext, useState } from "react";

export const BluetoothContext = createContext<any>(null);

export const BluetoothProvider = ({ children }: any) => {
  const [connectedDevice, setConnectedDevice] = useState(null);

  return (
    <BluetoothContext.Provider value={{ connectedDevice, setConnectedDevice }}>
      {children}
    </BluetoothContext.Provider>
  );
};

export const useBluetooth = () => useContext(BluetoothContext);

export default BluetoothProvider;
