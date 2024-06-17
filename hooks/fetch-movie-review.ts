import { API_OPTIONS } from "@/constants/api-url";

export default async function findReviewsByMovieId(id: string | string[] | undefined) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const request = await fetch(url, API_OPTIONS);
  const response = await request.json();

  return response.results;
}
