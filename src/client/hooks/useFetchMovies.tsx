import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

import { moviesState } from "../store/state"
import { getAllMovies } from "../apis/movies"

export function useFetchMovies() {
  const setMovies = useSetRecoilState(moviesState)
  useEffect(() => {
    getAllMovies().then((movies) => setMovies(movies))
  }, [])

  return
}
