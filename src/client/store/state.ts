import { atom } from "recoil"
import { Movie } from "../types/movies"

export const moviesState = atom<Movie[]>({
  key: "moviesState",
  default: [],
})

export const selectedMovie = atom<Movie>({
  key: "selectedMovie",
  default: undefined,
})
