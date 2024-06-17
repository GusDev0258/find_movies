import {
  DEFAULT_IMAGE_URL,
  DEFAULT_MOVIE_PICTURE,
} from "@/constants/image-url";
import { Movie } from "@/model/movie";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <View style={styles.container}>
      <Link href={`home/movie/${movie.id}`}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageCard}
            source={
              movie.poster_path
                ? `${DEFAULT_IMAGE_URL}${movie.poster_path}`
                : `${DEFAULT_MOVIE_PICTURE}`
            }
            contentFit="fill"
          />
        </View>
      </Link>
      <Text style={styles.movieTitle}>
        {movie.title ? movie.title : "Título não encontrado"}
      </Text>
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
    shadowOffset: { width: 6, height: 4 },
    shadowRadius: 3,
    shadowColor: "#898",
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
