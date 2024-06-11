import { Genre } from "./genre";

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  runtime: number;
  genres: Genre[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  adult: boolean;
  vote_average: number;
  vote_count: 99;
}
