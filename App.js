import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import DarkSide from "./src/pages/DarkSide";
import LightSide from "./src/pages/LightSide";
import CharacterDetails from "./src/pages/CharacterDetails";
import Ships from "./src/pages/Ships";
import Movies from "./src/pages/Movies";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  function nomesTrabalho() {
    alert("Eduardo Sichelero RA:" + "\n" + "Rafael Augusto Klein RA: 1134873");
  }

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
            title: "Lado Luminoso",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerRight: () => (
              <Button
              title="Sobre"
              onPress={() => nomesTrabalho()}
              />
            )
          }}
        />
        <Stack.Screen
          component={DarkSide}
          name="DarkSide"
          options={{
            title: "Lado Sombrio",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerRight: () => (
              <Button
              title="Sobre"
              onPress={() => nomesTrabalho()} />
            )
          }}
        />
        <Stack.Screen
          component={CharacterDetails}
          name="CharacterDetails"
          options={{
            title: "Detalhes do Personagem",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          component={Ships}
          name="Ships"
          options={{
            title: "Naves que ja pilotou",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          component={Movies}
          name="Movies"
          options={{
            title: "Filmes em que aparece",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}