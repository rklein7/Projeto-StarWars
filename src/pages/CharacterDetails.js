import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import backgroundImage from "../images/backgroundImage.jpeg";

export default function CharacterDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const [character, setCharacter] = useState(null);

  const goToShips = () => navigation.navigate("Ships", { ships: character.starships });
  const goToFilms = () => navigation.navigate("Movies", { films: character.films });

  useEffect(() => {
    setCharacter(route.params.character);
  }, [route]);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {character ? (
          <View style={styles.card}>
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.detail}>Altura: {character.height}</Text>
            <Text style={styles.detail}>Peso: {character.mass}</Text>
            <Text style={styles.detail}>Cor do Cabelo: {character.hair_color}</Text>
            <Text style={styles.detail}>Cor da Pele: {character.skin_color}</Text>
            <Text style={styles.detail}>Cor dos Olhos: {character.eye_color}</Text>
            <Text style={styles.detail}>Ano de Nascimento: {character.birth_year}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={goToShips}>
                <Text style={styles.buttonText}>Naves</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={goToFilms}>
                <Text style={styles.buttonText}>Filmes</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text style={styles.loadingText}>Carregando...</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFE81F',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detail: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#FFE81F',
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
