import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import backgroundImage from "../images/background.png"

export default function Ships({ route, navigation }) {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ships: shipUrls } = route.params; // Recebe os URLs das naves do personagem

  useEffect(() => {
    const fetchShips = async () => {
      try {
        // Realiza as requisições para os URLs das naves associadas ao personagem
        const shipPromises = shipUrls.map(url => fetch(url).then(response => response.json()));
        const shipData = await Promise.all(shipPromises);
        setShips(shipData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShips();
  }, [shipUrls]);

  const renderShipItem = ({ item }) => (
    <View style={styles.shipContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.model}>Model: {item.model}</Text>
      <Text style={styles.manufacturer}>Manufacturer: {item.manufacturer}</Text>
      <Text style={styles.starshipClass}>Class: {item.starship_class}</Text>
      <Text style={styles.crew}>Crew: {item.crew}</Text>
      <Text style={styles.passengers}>Passengers: {item.passengers}</Text>
      <Text style={styles.hyperdriveRating}>Hyperdrive Rating: {item.hyperdrive_rating}</Text>
    </View>
  );

  if (loading) {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#ffffff" />
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

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          data={ships}
          keyExtractor={(item) => item.url}
          renderItem={renderShipItem}
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
    marginTop: 45,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  shipContainer: {
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  name: {
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  model: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  manufacturer: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  starshipClass: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  crew: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  passengers: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  hyperdriveRating: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
