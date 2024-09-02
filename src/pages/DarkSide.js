import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react'; 
import { ImageBackground } from 'react-native';
import backgroundImage from "../images/backgroundImage.jpeg"


export default function DarkSide({navigation}) {

  const characters = [
    { name: 'Darth Vader', url: 'https://swapi.dev/api/people/4/' },
    { name: 'Darth Maul', url: 'https://swapi.dev/api/people/44/' },
    { name: 'Palpatine', url: 'https://swapi.dev/api/people/21/' },
    { name: 'Counde Dooku', url: 'https://swapi.dev/api/people/67/' },
  ];

  const [loading, setLoading] = useState(false);

  const handleCharacterPress = async (character) => {
     console.log(`Personagem selecionado: ${character.name}`);
     console.log(`URL da API: ${character.url}`);

    try {
      setLoading(true);
      const response = await fetch(character.url);
      const data = await response.json();
      console.log('Detalhes do personagem:', data);
      navigation.navigate('CharacterDetails', { character: data });
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        characters.map((character) => (
          <TouchableOpacity
            key={character.name}
            style={[styles.buttonDark]}
            onPress={() => handleCharacterPress(character)}
          >
            <Text style={[styles.buttonText]}>
              {character.name}
            </Text>
          </TouchableOpacity>
        ))
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
  buttonDark: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "red",
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});