import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground, Image } from 'react-native';
import backgroundImage from "../images/background.png"
import noShipsImage from "../images/noShips.png"

export default function Ships({ route, navigation }) {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ships: shipUrls } = route.params;

  useEffect(() => {
    const getShips = async () => {
      try {
        if (shipUrls.length === 0) {
          setShips([]);
        } else {
          const shipPromises = shipUrls.map(url => fetch(url).then(response => response.json()));
          const shipData = await Promise.all(shipPromises);
          setShips(shipData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getShips();
  }, [shipUrls]);

  const renderShipItem = ({ item }) => (
    <View style={styles.shipContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.shipConfig}>Modelo: {item.model}</Text>
      <Text style={styles.shipConfig}>Fabricação: {item.manufacturer}</Text>
      <Text style={styles.shipConfig}>Classe: {item.starship_class}</Text>
      <Text style={styles.shipConfig}>Equipe: {item.crew}</Text>
      <Text style={styles.shipConfig}>Passageiros: {item.passengers}</Text>
      <Text style={styles.shipConfig}>Classificação do hiperdrive: {item.hyperdrive_rating}</Text>
    </View>
  );

  if (loading) {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <ActivityIndicator size="medium" color="#ff8600" />
        </View>
      </ImageBackground>
    );
  }

  if (error) {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Error: {error.message}</Text>
        </View>
      </ImageBackground>
    );
  }

  if (ships.length === 0) {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={noShipsImage} style={styles.noShipsImage} />
          <Text style={styles.noShipsText}>Ops...</Text>
          <Text style={styles.noShipsTextTitle}>Parece que não pilotou nenhuma nave!</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          data={ships}
          keyExtractor={(item) => item.url}
          renderItem={renderShipItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  shipContainer: {
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '98%',
    height: 230,
    boxShadow: '4px 6px 0px #ff8600',
    borderWidth: 2,
    borderColor: '#ff8600',
  },
  name: {
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 30,
    color: '#ff8600',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  shipConfig: {
    color: "black",
    fontSize: 16,

  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  noShipsText: {
    textAlign: 'center',
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 30,
    color: 'yellow',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(255, 134, 0, 0.75)',
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 3,
  },
  noShipsTextTitle: {
    color: 'yellow',
    textShadowColor: 'rgba(255, 134, 0, 0.75)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
    fontSize: 20,
    fontWeight: "600",
  },
  noShipsImage: {
    width: 400,
    height: 400,
  },
});

