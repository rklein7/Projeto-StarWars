import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
// import starwarsLogo from "./assets/starwarsLogo.png";


export default function Home({ navigation }) {
    const goToLightSide = () => navigation.navigate("LightSide");
    const goToDarkSide = () => navigation.navigate("DarkSide");

  return (
    <View style={[styles.container]}>
      {/* <Image source={starwarsLogo} style={styles.logo} /> */}
      <Text style={styles.text}>Hello There!</Text>
      <TouchableOpacity style={[styles.buttonLightSide, { backgroundColor: '#00FF00' }]} onPress={goToLightSide}>
        <Text style={[styles.buttonText, { color: '#000000' }]}>Lado Luminoso da força</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonDarkSide]} onPress={goToDarkSide}>
        <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>Lado Escuro da Força</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#000"
  },
  buttonLightSide: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#0000CD",
    marginBottom: 10,
  },
  buttonDarkSide: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "red",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: "white",
    paddingBottom: "50px",
  }
});