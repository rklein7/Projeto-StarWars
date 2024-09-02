import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from "../images/backgroundImage.jpeg"


export default function CharacterDetails() {
  const route = useRoute();
  const [character, setCharacter] = useState(null);

  const goToShips = () => navigation.navigate("Ships");

  useEffect(() => {
    setCharacter(route.params.character);
  }, [route]);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {character ? (
          <>
            <Text style={styles.text}>Nome do Personagem: {character.name}</Text>
            <Text style={styles.text}>Altura: {character.height}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={goToShips}>
                <Text style={styles.buttonText}>Naves</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Filmes</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%", 
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});