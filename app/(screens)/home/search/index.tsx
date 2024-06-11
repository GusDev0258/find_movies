import MovieCard from "@/components/movie-card";
import { findMovieByName } from "@/hooks/fetch-movies-by-name";
import { Movie } from "@/model/movie";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState<Movie[] | []>([]);

  const handleMovieSearch = () => {
    if (movie != "") {
      findMovieByName(movie).then((data) => setMovies(data));
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Procure filmes"
          onChangeText={setMovie}
          value={movie}
        />
        <Pressable style={styles.button} onPress={handleMovieSearch}>
          <Text style={styles.buttonText}>Pesquisar Títulos</Text>
        </Pressable>
      </View>
      {movies.length != 0 && (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Resultados da busca</Text>
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    padding: 12
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
    marginTop: 10,
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
});
