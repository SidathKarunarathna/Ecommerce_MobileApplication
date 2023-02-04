import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider, Text } from "native-base";
// import SingleProductScreen from "./src/Screens/SingleProductScreen";
// import HomeScreen from "./src/Screens/HomeScreen";
// import LoginScreen from "./src/Screens/LoginScreen";
// import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  );
}
