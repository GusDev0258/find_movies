import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import {Link} from 'expo-router'
export default function Home() {
  return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source="https://i.postimg.cc/TYcYzJkz/home-background.png"
          contentFit="fill"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.mainText}>Find Movies</Text>
          <Image
            source={"https://i.postimg.cc/3wXL1WrF/home-player.png"}
            style={styles.player}
          />
        </View>
        <Link href={"/home"} asChild>
          <Pressable style={styles.button}>
            <Text>Entrar</Text>
          </Pressable>
        </Link>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fafafa",
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  player: {
    width:40,
    height:40
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12
  },
  button: {
    backgroundColor: "#fff",
    color: "#333",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4
  }
});
