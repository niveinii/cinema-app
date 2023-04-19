import { atom } from "recoil"
import { Movie } from "../types/movies"

export const moviesState = atom<Movie[]>({
  key: "moviesState",
  default: [],
})

export const filteredMoviesState = atom<Movie[]>({
  key: "filteredMoviesState",
  default: [],
})

export const selectedMovieState = atom<Movie>({
  key: "selectedMovieState",
  default: undefined,
})
