import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import DarkSide from "./src/pages/DarkSide";
import LightSide from "./src/pages/LightSide";
import CharacterDetails from "./src/pages/CharacterDetails";
import Ships from "./src/pages/Ships";
import Movies from "./src/pages/Movies";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  function nomesTrabalho() {
    alert("Eduardo Sichelero RA: 1134933" + "\n" + "Rafael Augusto Klein RA: 1134873");
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
              <TouchableOpacity title="Sobre" style={[styles.button, {backgroundColor: "blue"}]} onPress={() => nomesTrabalho()}>
                <Text style={styles.buttonText}>Sobre</Text>
              </TouchableOpacity>
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
              <TouchableOpacity title="Sobre" style={[styles.button, {backgroundColor: "red"}]} onPress={() => nomesTrabalho()}>
                <Text style={styles.buttonText}>Sobre</Text>
              </TouchableOpacity>
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

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 40,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white", 
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})