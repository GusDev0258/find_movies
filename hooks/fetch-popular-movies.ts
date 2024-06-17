import { API_OPTIONS, API_URL_FIND_POPULAR_MOVIES } from "@/constants/api-url";

export async function findPopularMovies() {
  const request = await fetch(API_URL_FIND_POPULAR_MOVIES, API_OPTIONS);
  const response = await request.json();
  return response.results || []; 
}
