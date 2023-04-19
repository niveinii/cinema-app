const BASE_URL = process.env.URL || "http://localhost:5000"

export const MOVIES_API = {
  ALL_MOVIES: `${BASE_URL}/movies`,
  SINGLE_MOVIE: (movieId: string) => `${BASE_URL}/movies/${movieId}`,
}
