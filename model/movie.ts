import { Genre } from "./genre";

export interface Movie {
  id: number;
  title: string;
  genres: Genre[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  adult: boolean;
}
