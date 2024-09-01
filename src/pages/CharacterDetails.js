import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CharacterDetails() {
  const route = useRoute();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setCharacter(route.params.character);
  }, [route]);

  return (
    <View style={styles.container}>
    {character ? (
        <>
          <Text>Nome do Personagem: {character.name}</Text>
          <Text>Altura: {character.height}</Text>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
  </View>
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