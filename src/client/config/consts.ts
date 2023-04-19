export const APIS = {
  ALL_MOVIES: "http://localhost:5000/movies",
  SINGLE_MOVIE: (movieId: string) => `http://localhost:5000/movies/${movieId}`,
}
