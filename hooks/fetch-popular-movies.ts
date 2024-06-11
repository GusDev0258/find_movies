import { API_OPTIONS, API_URL_FIND_POPULAR_MOVIES } from "@/constants/url";

export async function findPopularMovies() {
  const request = await fetch(API_URL_FIND_POPULAR_MOVIES, API_OPTIONS);
  const response = await request.json();
  console.log(response);
  return response.results || []; // Ensure it returns an array
}
