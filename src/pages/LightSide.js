import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function LightSide() {
  const characters = [
    { name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/' },
    { name: 'Leia Organa', url: 'https://swapi.dev/api/people/5/' },
    { name: 'Yoda', url: 'https://swapi.dev/api/people/20/' },
    { name: 'Obi-wan Kenobi', url: 'https://swapi.dev/api/people/10/' },
    { name: 'Mace Windu', url: 'https://swapi.dev/api/people/51/' },
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
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        characters.map((character) => (
          <TouchableOpacity
            key={character.name}
            style={[styles.buttonLight]}
            onPress={() => handleCharacterPress(character)}
          >
            <Text style={[styles.buttonText]}>
              {character.name}
            </Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    marginBottom: 20,
  },
  buttonLight: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#0000CD",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
});