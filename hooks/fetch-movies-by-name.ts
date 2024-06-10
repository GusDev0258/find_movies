import { API_TOKEN, API_URL_FIND_MOVIE_BY_NAME } from "@/constants/url";
export const findMovieByName = async (name: string) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: API_TOKEN,
    },
  };
  const url = `${API_URL_FIND_MOVIE_BY_NAME}?query=${encodeURIComponent(name)}&include_adult=false&language=pt-BR&page=1`;
  const request = await fetch(url, options);
  const response = await request.json();
  return response.results ? response.results[0] : null;
};
