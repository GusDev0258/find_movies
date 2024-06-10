import { findMoviesByName } from "@/hooks/fetch-movies-by-name";
import { Movie } from "@/model/movie";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function QueryResult() {
  const { query } = useLocalSearchParams();
  const [movie,setMovie] = useState<Movie>();
  
  const handleMovieSearch = async () => {
    return await findMoviesByName(query as string); 
  }

  useEffect(() => {
    handleMovieSearch().then(movieData => setMovie(movieData)) 
  },[query])

  return (
    <View>
      {movie && (
      <Text>movie.Title</Text>
      )}
    </View>
  );
}
