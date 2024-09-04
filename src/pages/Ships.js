import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import backgroundImage from "../images/background.png"

export default function Ships({ route, navigation }) {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ships: shipUrls } = route.params;

  useEffect(() => {
    const fetchShips = async () => {
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
    
    fetchShips();
  }, [shipUrls]);

  const renderShipItem = ({ item }) => (
    <View style={styles.shipContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.shipConfig}>Model: {item.model}</Text>
      <Text style={styles.shipConfig}>Manufacturer: {item.manufacturer}</Text>
      <Text style={styles.shipConfig}>Class: {item.starship_class}</Text>
      <Text style={styles.shipConfig}>Crew: {item.crew}</Text>
      <Text style={styles.shipConfig}>Passengers: {item.passengers}</Text>
      <Text style={styles.shipConfig}>Hyperdrive Rating: {item.hyperdrive_rating}</Text>
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
          <Text style={styles.noShipsText}>Este personagem não possui uma nave.</Text>
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
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  name: {
    color: "#ff8600",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shipConfig: {
    color: "black",
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  noShipsText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center',
  },
});
