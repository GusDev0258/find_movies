import { API_TOKEN, API_URL_FIND_POPULAR_MOVIES } from "@/constants/url";

export async function findPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M4MTU4NTU1NWY0ODk5MzE0OTM2ZGEyMjc4NjI4YiIsInN1YiI6IjY2NjZmM2QwMWVmYzBlZWY3MjE1Y2YyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FtXwzYPkbnryJOPDKUytUDUOimxUd6DABOB2uJxLDFg",
    },
  };
  const request = await fetch(API_URL_FIND_POPULAR_MOVIES, options);
  const response = await request.json();
  console.log(response);
  return response.results || []; // Ensure it returns an array
}
