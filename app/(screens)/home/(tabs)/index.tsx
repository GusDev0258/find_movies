import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [movie, setMovie] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introductionContainer}>
        <Text style={styles.userGreeting}>Olá, Usuário 👋</Text>
        <Text>Hoje é um ótimo dia para assitir filmes 🍿</Text>
      </View>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Procure filmes"
          onChangeText={(newText) => setMovie(newText)}
          defaultValue={movie}
        />
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
    paddingHorizontal: 12,
  },
  userGreeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchInput: {
    height: 40,
    borderColor: "#333",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "transparent",
  },
});
