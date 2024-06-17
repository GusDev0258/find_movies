import { API_OPTIONS, API_URL_FIND_MOVIE_BY_ID } from "@/constants/api-url";
export default async function findMovieByid(id: string | string[] | undefined) {
  const request = await fetch(
    `${API_URL_FIND_MOVIE_BY_ID}${id}?language=en-US`,
    API_OPTIONS,
  );
  const response = await request.json();
  return response;
}
