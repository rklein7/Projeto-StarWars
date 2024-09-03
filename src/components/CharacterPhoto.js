// CharacterPhoto.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function CharacterPhoto({ imageUrl }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFE81F',
  },
});
