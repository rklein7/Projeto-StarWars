import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import starwarsLogo from "../images/starwarsLogo.png";
import backgroundImage from "../images/background.png"
import { ImageBackground } from 'react-native';
// import DefaultButton from '../components/DefaultButton.js'

const DefaultButton =({ title, onPress }) => {
   return( 
       <TouchableOpacity style={styles.button} onPress={onPress}>
       <Text style={styles.buttonText}>{title}</Text>
     </TouchableOpacity>
   )
 };

export default function Home({ navigation }) {
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
    color: "white",
    fontSize: 30,
    fontWeight: 'bold'
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,

    backgroundColor: 'yellow',
    cursor: 'pointer',
    boxShadow: '4px 6px 0px #ff8600',
    border: '4px solid #ff8600',

  },
  buttonText: {
    color:"#FF4D00",
    fontSize: 22,
    fontWeight: "600",
  },
});