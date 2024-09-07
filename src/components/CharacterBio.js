import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CharacterBio({ bio, imageUrl }) {
  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.bioText}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },title: {
    fontSize: 28,
    color: '#FFE81F',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
