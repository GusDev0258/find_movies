import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { findPopularMovies } from "@/hooks/fetch-popular-movies";
import { Link } from "expo-router";
import { Movie } from "@/model/movie";
import MovieCard from "@/components/movie-card";

export default function Index() {
  const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    findPopularMovies().then((data) => setPopularMovies(data));
  }, []);

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
              <Link href="/home/search/" asChild>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Pesquisar Títulos</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Filmes Populares no Brasil</Text>
          <FlatList
            data={popularMovies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
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
    height: "100%",
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
    marginTop: 10,
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
});
