const BASE_API = "http://localhost:5000"
export const APIS = {
  ALL_MOVIES: `${BASE_API}/movies`,
  SINGLE_MOVIE: (movieId: string) => `${BASE_API}/movies/${movieId}`,
}