import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import starwarsLogo from "../images/starwarsLogo.png";
import backgroundImage from "../images/background.png"
import { ImageBackground } from 'react-native';
import {DefaultButton} from '../components/Button.js'

export default function Home ({ navigation }) {
  const goToLightSide = () => navigation.navigate("LightSide");
  const goToDarkSide = () => navigation.navigate("DarkSide");

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={[styles.container]}>
      <Image source={starwarsLogo} style={styles.logo} />
      <Text style={styles.title}>Hello There!</Text>
      <Text style={styles.text}>Para começarmos, selecione o lado que deseja seguir</Text>
      <DefaultButton title="Lado Luminoso da Força" onPress={goToLightSide} />
      <DefaultButton title="Lado Escuro da Força" onPress={goToDarkSide} />
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
    textAlign: 'center',
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 35,
    color: 'yellow',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(255, 134, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 3,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: '600'
  },
  logo: {
    width: 300,
    height: 200,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});