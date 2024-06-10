import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [movies, setMovies] = useState();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introductionContainer}>
        <Text style={styles.userGreeting}>Olá, Usuário 👋</Text>
        <Text>Hoje é um ótimo dia para assitir filmes 🍿</Text>
      </View>
      <View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  introductionContainer: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 12
  },
  userGreeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  }
});
