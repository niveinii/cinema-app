import { MOVIES_API } from "./config"
import { Movie } from "../types/movies"

export async function getAllMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(MOVIES_API.ALL_MOVIES)
    return await response.json()
  } catch (error) {
    console.error(error)
    throw new Error("Failed to retrieve movies")
  }
}

export async function getSingleMovie(id: string): Promise<Movie[]> {
  try {
    const response = await fetch(MOVIES_API.SINGLE_MOVIE(id))
    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error("Failed to retrieve movie")
  }
}
