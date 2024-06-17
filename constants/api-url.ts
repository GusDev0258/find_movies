export const API_OPTIONS  = {

  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {YourTokenGoesHere}"
  }
}

export const API_URL_FIND_MOVIE_BY_ID  =  "https://api.themoviedb.org/3/movie/"

export const API_URL_FIND_MOVIE_BY_NAME = " https://api.themoviedb.org/3/search/movie"

export const API_URL_FIND_POPULAR_MOVIES  = "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1"
