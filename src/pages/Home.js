import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import starwarsLogo from "../images/starwarsLogo.png";

export default function Home({ navigation }) {
  const goToLightSide = () => navigation.navigate("LightSide");
  const goToDarkSide = () => navigation.navigate("DarkSide");

  return (
    <View style={[styles.container]}>
      <Image source={starwarsLogo} style={styles.logo} />
      <Text style={styles.title}>Hello There!</Text>
      <Text style={styles.text}>Para começarmos, selecione o lado que deseja seguir</Text>
      <TouchableOpacity style={styles.buttonLightSide} onPress={goToLightSide}>
        <Text style={styles.buttonText}>Lado Luminoso da força</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDarkSide} onPress={goToDarkSide}>
        <Text style={styles.buttonText}>Lado Escuro da Força</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 30,
    paddingVertical: 100, 
    backgroundColor: "#000",
    fontFamily: "ITC SerifGothic"
  },
  title: {
    paddingTop : 120,
    color: "white",
    fontSize: 24, // Aumenta o tamanho da fonte
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  buttonLightSide: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#0000CD",
  },
  buttonDarkSide: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "red",
  },
  buttonText: {
    color:"white",
    fontSize: 22,
    fontWeight: "600",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },

});