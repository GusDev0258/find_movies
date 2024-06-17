import { API_OPTIONS, API_URL_FIND_MOVIE_BY_NAME } from "@/constants/api-url";
export const findMovieByName = async (name: string) => {
  const url = `${API_URL_FIND_MOVIE_BY_NAME}?query=${encodeURIComponent(name)}&include_adult=false&language=en-US&page=1`;
  const request = await fetch(url, API_OPTIONS);
  const response = await request.json();
  return response.results;
};
