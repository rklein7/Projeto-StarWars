import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';
import Home from "./src/pages/Home";
import DarkSide from "./src/pages/DarkSide";
import LightSide from "./src/pages/LightSide";
import CharacterDetails from "./src/pages/CharacterDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={LightSide}
          name="LightSide"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={DarkSide}
          name="DarkSide"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={CharacterDetails}
          name="CharacterDetails"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}