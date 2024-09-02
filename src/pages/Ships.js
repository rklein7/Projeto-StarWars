import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundImage from "../images/backgroundImage.jpeg"


export default function Ships({navigation}) {
  
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text>Hello World</Text>
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