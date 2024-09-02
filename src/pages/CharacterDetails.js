import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from "../images/backgroundImage.jpeg";

export default function CharacterDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const [character, setCharacter] = useState(null);

  // Função para navegar para a tela de naves
// Função para navegar para a tela de naves, passando as naves como parâmetro
const goToShips = () => navigation.navigate("Ships", { ships: character.starships });


  // Função para navegar para a tela de filmes, passando os filmes como parâmetro
  const goToFilms = () => navigation.navigate("Films", { films: character.films });

  useEffect(() => {
    setCharacter(route.params.character);
  }, [route]);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {character ? (
          <>
            <View>
              <Text style={styles.text}>Nome do Personagem: {character.name}</Text>
              <Text style={styles.text}>Altura: {character.height}</Text>
              <Text style={styles.text}>Peso: {character.mass}</Text>
              <Text style={styles.text}>Cor do Cabelo: {character.hair_color}</Text>
              <Text style={styles.text}>Cor da Pele: {character.skin_color}</Text>
              <Text style={styles.text}>Cor dos Olhos: {character.eye_color}</Text>
              <Text style={styles.text}>Ano de Nascimento: {character.birth_year}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={goToShips}>
                <Text style={styles.buttonText}>Naves</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={goToFilms}>
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
    color: "black",
    fontSize: 22,
    fontWeight: "600",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
