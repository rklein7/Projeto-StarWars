import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import starwarsLogo from "../images/starwarsLogo.png";
import backgroundImage from "../images/backgroundImage.jpeg"
import { ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  const goToLightSide = () => navigation.navigate("LightSide");
  const goToDarkSide = () => navigation.navigate("DarkSide");

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={[styles.container]}>
      <Image source={starwarsLogo} style={styles.logo} />
      <Text style={styles.title}>Hello There!</Text>
      <Text style={styles.text}>Para começarmos, selecione o lado que deseja seguir</Text>
      <TouchableOpacity style={styles.button} onPress={goToLightSide}>
        <Text style={styles.buttonText}>Lado Luminoso da força</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToDarkSide}>
        <Text style={styles.buttonText}>Lado Escuro da Força</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 30,
    paddingVertical: 100, 
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: '600'
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#FFE81F",
  },

  buttonText: {
    color:"black",
    fontSize: 22,
    fontWeight: "600",
  },
  logo: {
    width: 200,
    height: 100,
  },
  backgroundImage: {
    flex: 1, // Cover the entire screen
    resizeMode: 'cover', // Scale to fit the screen
  },
});