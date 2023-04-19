export const APIS = {
  ALL_MOVIES: "http://localhost:5000/movies",
  SINGLE_MOVIE: (movieId: string) => `http://localhost:5000/movies/${movieId}`,
}

export const MAX_MOVIE_SCORE = 10
