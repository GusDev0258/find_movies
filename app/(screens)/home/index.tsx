import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { findMovieByName } from "@/hooks/fetch-movies-by-name";
import { findPopularMovies } from "@/hooks/fetch-popular-movies";
import { Movie } from "@/model/movie";
import MovieCard from "@/components/movie-card";
import mockPopularMovies from "@/mock/movie-mock";

export default function Index() {
  const [movie, setMovie] = useState("");
  const [result, setResult] = useState<Movie | null>(null);
  const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null);

  const handleMovieSearch = async () => {
    if (movie.trim() !== "") {
      const res = await findMovieByName(movie);
      if (res) {
        setResult(res);
      }
    }
  };
  // useEffect(() => {
  //   findPopularMovies().then((data) => setPopularMovies(data));
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.introductionContainer}>
              <Text style={styles.userGreeting}>Olá, Usuário 👋</Text>
              <Text>Hoje é um ótimo dia para assistir filmes 🍿</Text>
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Procure filmes"
                onChangeText={setMovie}
                value={movie}
              />
              <Pressable style={styles.button} onPress={handleMovieSearch}>
                <Text style={styles.buttonText}>Pesquisar</Text>
              </Pressable>
            </View>
            {result && <Text>{result.title}</Text>}
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Filmes Populares no Brasil</Text>
          <FlatList
            data={mockPopularMovies.results}
            renderItem={({ item }) => <MovieCard movie={item} />}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()} // Ensure item.id is a string or number
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: "100%"
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
  introductionContainer: {
    marginVertical: 16,
  },
  userGreeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    justifyContent: "center",
  },
  searchInput: {
    height: 40,
    borderColor: "#333",
    borderWidth: 2,
    borderRadius: 6,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  listContainer: {
    height: "50%",
    marginTop: 10
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4 
  }
});
