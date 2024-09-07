import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, ActivityIndicator } from 'react-native';
import backgroundImage from "../images/background.png";
import bioData from '../data/Bio.json'; 
import CharacterPhoto from '../components/CharacterBio'; 
import CharacterBio from '../components/CharacterPhoto'; 

export default function CharacterDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const [character, setCharacter] = useState(null);
  const [bio, setBio] = useState('');
  const [bioImage, setBioImage] = useState(''); 

  const goToShips = () => navigation.navigate("Ships", { ships: character.starships });
  const goToFilms = () => navigation.navigate("Movies", { films: character.films });

  useEffect(() => {
    if (route.params.character) {
      const selectedCharacter = route.params.character;
      setCharacter(selectedCharacter);
      const characterBio = bioData.find(b => b.id === parseInt(selectedCharacter.url.split('/').slice(-2, -1)[0]));
      if (characterBio) {
        setBio(characterBio.bio);
        setBioImage(characterBio.imageUrl);
      } else {
        setBio('Bio não disponível');
        setBioImage('');
      }
    }
  }, [route]);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {character ? (
          <View style={styles.container}>
            <View style={styles.header}>
              <Image source={{ uri: bioImage }} style={styles.bioImage} />
              <CharacterPhoto imageUrl={character.imageUrl} style={styles.characterImage} />
              <CharacterBio bio={bio} imageUrl={bioImage} />
            </View>
  
            <View style={styles.bioCard}>
              <Text style={styles.title}>Biografia</Text>
              <Text style={styles.bioText}>{bio}</Text> 
            </View>
  
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
          </View>
        ) : (
          <ActivityIndicator size="medium" color="#ff8600" />
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
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  bioImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.5,
  },
  bioCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
    marginVertical: 20,
    color: '#fff',
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FFE81F',
    marginBottom: 10,
    position: 'absolute',
    top: 20,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
  bioText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'yellow',
    cursor: 'pointer',
    boxShadow: '4px 6px 0px #ff8600',
    borderWidth: 2,
    borderColor: '#ff8600',
  },
  buttonText: {
    fontSize: 18,
    color:"#FF4D00",
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
