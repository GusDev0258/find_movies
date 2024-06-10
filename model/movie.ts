import { Genre } from "./genre";

export interface Movie {
  id: number;
  title: string;
  genres: Genre[];
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  adult: boolean;
}
