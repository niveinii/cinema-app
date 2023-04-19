import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

import { filteredMoviesState, moviesState } from "../store/state"
import { getAllMovies } from "../apis/movies"

export function useFetchMovies() {
  const setMovies = useSetRecoilState(moviesState)
  const setFilteredMovies = useSetRecoilState(filteredMoviesState)
  useEffect(() => {
    getAllMovies().then((movies) => {
      setMovies(movies)
      setFilteredMovies(movies)
    })
  }, [])

  return
}
