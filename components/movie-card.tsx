import { Movie } from "@/model/movie";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageCard}
          source={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          contentFit="fill"
        />
      </View>
      <Text style={styles.movieTitle}>{movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 164,
    height: 280,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    padding: 8,
  },
  imageContainer: {
    width: 144,
    height: 200,
    borderRadius: 6,
    shadowOpacity: 0.4,
    shadowOffset: {width: 6, height: 4},
    shadowRadius: 3,
    shadowColor: '#898'
  },
  imageCard: {
    width: 144,
    height: 200,
    borderRadius: 6,
  },
  movieTitle: {
    color: "#888888",
    fontSize: 12,
    fontWeight: "bold",
    height: 40,
  },
});
