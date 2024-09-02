import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import backgroundImage from "../images/backgroundImage.jpeg";

export default function Movies({ route, navigation }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { films: filmUrls } = route.params; // Recebe os URLs dos filmes do personagem

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // Realiza as requisições para os URLs dos filmes associados ao personagem
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
      <Text style={styles.director}>Director: {item.director}</Text>
      <Text style={styles.releaseDate}>Release Date: {item.release_date}</Text>
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
          data={films}
          keyExtractor={(item) => item.url}
          renderItem={renderFilmItem}
          showsHorizontalScrollIndicator={false} // Corrigido: movido para o FlatList
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
    backgroundColor: 'rgba(255, 255, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  director: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  releaseDate: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
