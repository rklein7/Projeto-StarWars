import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import backgroundImage from "../images/background.png"

export default function Movies({ route, navigation }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { films: filmUrls } = route.params;

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const filmPromises = filmUrls.map(url => fetch(url).then(response => response.json()));
        const filmData = await Promise.all(filmPromises);
        setFilms(filmData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [filmUrls]);

  const renderFilmItem = ({ item }) => (
    <View style={styles.filmContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.director}>Diretor: {item.director}</Text>
      <Text style={styles.director}>Episodio: {item.episode_id}</Text>
      <Text style={styles.releaseDate}>Data de lançamento: {item.release_date}</Text>
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

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          data={films}
          keyExtractor={(item) => item.url}
          renderItem={renderFilmItem}
          showsHorizontalScrollIndicator={false}
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
  filmContainer: {
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    width: '98%',
    height: 186,
    boxShadow: '4px 6px 0px #ff8600',
    borderWidth: 2,
    borderColor: '#ff8600'
  },
  title: {
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
  director: {
    color: "black",
    fontSize: 16,
    marginBottom: 5,
  },
  releaseDate: {
    color: "black",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
