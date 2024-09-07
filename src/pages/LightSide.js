import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import backgroundImage from "../images/background.png"
import { ForcesButton } from "../components/Button.js";

export default function LightSide({ navigation }) {
  const characters = [
    { name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/' },
    { name: 'Leia Organa', url: 'https://swapi.dev/api/people/5/' },
    { name: 'Yoda', url: 'https://swapi.dev/api/people/20/' },
    { name: 'Obi-wan Kenobi', url: 'https://swapi.dev/api/people/10/' },
    { name: 'Mace Windu', url: 'https://swapi.dev/api/people/51/' },
  ];

  const [loading, setLoading] = useState(false);

  const getAndGoToCharacterDetails = async (character) => {
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
          <ActivityIndicator size="medium" color="#ff8600" />
        ) : (
          characters.map((character) => (
            <ForcesButton
              key={character.name}
              style={[{
                backgroundColor: '#212EDE',borderColor: "#268BFF",
                boxShadow: '4px 6px 0px #268BFF',
                border: '4px solid #268BFF',}]}
              onPress={() => getAndGoToCharacterDetails(character)}
            >
              <Text style={[{ color: "white", fontSize: 20, fontWeight: "600" }]}>
                {character.name}
              </Text>
            </ForcesButton>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});