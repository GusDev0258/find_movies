import ReviewCard from "@/components/review-card";
import {
  DEFAULT_IMAGE_URL,
  DEFAULT_MOVIE_PICTURE,
} from "@/constants/image-url";
import findReviewsByMovieId from "@/hooks/fetch-movie-review";
import findMovieByid from "@/hooks/fetch-movies-by-id";
import mockPopularMovies from "@/mock/movie-mock";
import { Movie } from "@/model/movie";
import { Review } from "@/model/review";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

enum TAB {
  INFO_TAB = 0,
  REVIEW_TAB = 1,
}

export default function MovieScreen() {
  const { movie } = useLocalSearchParams();
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentMovieReviews, setCurrentMovieReviews] = useState<Review[] | []>(
    [],
  );
  const currentMovieYear = currentMovie?.release_date.split("-")[0];
  const [currentTab, setCurrentTab] = useState<TAB>(0);
  const movieFirstGenre = currentMovie?.genres[0]?.name
    ? currentMovie.genres[0].name
    : "none";
  const movieSecondGenre = currentMovie?.genres[1]?.name
    ? `/ ${currentMovie.genres[1]?.name}`
    : "none";
  const movieRuntime = currentMovie?.runtime
    ? `${currentMovie.runtime} min`
    : "60 min";
  const movieAverageCount = currentMovie?.vote_average
    ? currentMovie.vote_average
    : "0.0";
  const movieLikes = currentMovie?.vote_count ? currentMovie.vote_count : "0";
  const movieOverview = currentMovie?.overview ?  currentMovie.overview : "Sem sinopse sobre este filme"
  useEffect(() => {
    setCurrentMovie(mockPopularMovies.results[0]);
  }, []);
  useEffect(() => {
    findMovieByid(movie).then((data) => setCurrentMovie(data));
    findReviewsByMovieId(movie).then((data) => setCurrentMovieReviews(data));
  }, []);
  const getTabStyle = (tabIndex: number) => {
    return {
      backgroundColor: currentTab == tabIndex ? "#fff" : "transparent",
      padding: 12,
      borderRadius: 24,
      fontSize: 8,
    };
  };

  if (!movie) {
    return (
      <SafeAreaView>
        <Text style={styles.movieNotFoundText}>Filme não encontrado</Text>
      </SafeAreaView>
    );
  }
  if (currentMovie == null) {
    return (
      <SafeAreaView>
        <Text>Carregando dados...</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.imageBackgroundContainer}>
          <Image
            source={
              currentMovie.backdrop_path
                ? `${DEFAULT_IMAGE_URL}${currentMovie.backdrop_path}`
                : `${DEFAULT_MOVIE_PICTURE}`
            }
            contentFit="cover"
            contentPosition="center"
            style={styles.imageBackground}
          />
        </View>
        <View style={styles.movieInfoContainer}>
          <View style={styles.posterImageContainer}>
            <Image
              source={
                currentMovie.backdrop_path
                  ? `${DEFAULT_IMAGE_URL}${currentMovie.poster_path}`
                  : `${DEFAULT_MOVIE_PICTURE}`
              }
              contentFit="cover"
              style={styles.posterImage}
            />
          </View>
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{currentMovie.title}</Text>
            <Text style={styles.movieTagline}>{currentMovie.tagline}</Text>
            <View style={styles.movieSecondaryInfoContainer}>
              <Text style={styles.movieSecondaryInfo}>
                {currentMovieYear} |
              </Text>
              <Text style={styles.movieSecondaryInfo}>
                {movieFirstGenre} {" / "}
                {movieSecondGenre}
              </Text>
              <Text style={styles.movieSecondaryInfo}>| {movieRuntime}</Text>
            </View>
            <View style={styles.movieSecondaryInfoContainer}>
              <Text style={styles.movieSecondaryInfo}>
                ⭐ {movieAverageCount} / 10.0
              </Text>
              <Text style={styles.movieSecondaryInfo}>
                ❤️ {movieLikes} likes
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.movieTopicsContainer}>
          <View style={styles.tabList}>
            <Pressable
              style={getTabStyle(TAB.INFO_TAB)}
              onPress={() => setCurrentTab(TAB.INFO_TAB)}
            >
              <Text style={styles.tabTitle}>Sinopse</Text>
            </Pressable>
            <Pressable
              style={getTabStyle(TAB.REVIEW_TAB)}
              onPress={() => setCurrentTab(TAB.REVIEW_TAB)}
            >
              <Text style={styles.tabTitle}>Avaliações</Text>
            </Pressable>
          </View>
          {currentTab == TAB.INFO_TAB && (
            <View style={styles.topicContainer}>
              <Text style={styles.aboutMovie}>Sobre o filme</Text>
              <Text>{movieOverview}</Text>
            </View>
          )}
          {currentTab == TAB.REVIEW_TAB && (
            <View style={styles.topicContainer}>
              <FlatList
                data={currentMovieReviews}
                renderItem={({ item }) => <ReviewCard review={item} />}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  movieNotFoundText: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
  },
  imageBackground: {
    width: "100%",
    height: 242,
    position: "absolute",
    zIndex: -1,
    top: 0,
  },
  imageBackgroundContainer: {
    position: "relative",
    width: "100%",
    height: 242,
  },
  movieInfoContainer: {
    width: "100%",
    height: "16%",
    paddingVertical: 8,
    paddingHorizontal: 14,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  posterImageContainer: {
    width: 144,
    height: 200,
    position: "relative",
  },
  posterImage: {
    width: 144,
    height: 200,
    borderRadius: 6,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 4,
    position: "absolute",
    top: -100,
  },
  movieInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 4,
  },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 20,
    width: 220,
  },
  movieTagline: {
    color: "#333",
    maxWidth: 220,
    fontSize: 12,
  },
  movieSecondaryInfoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    flexWrap: "wrap",
    alignItems: "center",
  },
  movieSecondaryInfo: {
    fontSize: 12,
    color: "#333",
    fontWeight: "bold",
  },
  movieTopicsContainer: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    backgroundColor: "#e7e6e6",
    borderRadius: 10,
  },
  topicContainer: {
    marginTop: 12,
  },
  aboutMovie: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  tabTitle: {
    fontSize: 12,
  },
});
