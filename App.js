import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Item from "./components/Item";
import Home from "./screens/Home";
import Header from "./components/Header";
import ItemScreen from "./screens/ItemScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CafeScreen from "./screens/CafeScreen";
import SneakerScreen from "./screens/SneakerScreen";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Cafe"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={ItemScreen} />
        <Stack.Screen name="SneakerDetails" component={SneakerScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Cafe" component={CafeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
