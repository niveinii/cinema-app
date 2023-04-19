import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import { Movie, MovieKeys } from "../../../types/movies"
import { useFetchMovies } from "../../../hooks/useFetchMovies"
import { filteredMoviesState, moviesState } from "../../../store/state"

import { Logo } from "./logo/view"
import { Tiles } from "./tiles/view"
import { Footer } from "./footer/view"
import { Header } from "./header/view"
import Filters from "./filters/view"

export const Movies = () => {
  useFetchMovies()
  const movies = useRecoilValue<Movie[]>(moviesState)
  const [filteredMoviesList, setFilteredMovies] =
    useRecoilState<Movie[]>(filteredMoviesState)

  const filteredMoviesCb = (e: any, value: string) => {
    const filteredMovies = movies.filter((movie: Movie) =>
      movie[MovieKeys.Title].includes(value)
    )
    setFilteredMovies(filteredMovies)
  }
  return (
    <>
      <Logo />
      <Container>
        <Header />
        <Filters movies={filteredMoviesList} filterCb={filteredMoviesCb} />
        <TilesSection>
          <Tiles movies={filteredMoviesList} />
        </TilesSection>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  padding: 5%;
  background: #00d7ff 0 0 no-repeat padding-box;
  @media screen and (max-width: 1000px) {
    padding: 0 0 5% 0;
  }
`

const TilesSection = styled.div`
  margin-top: 5%;
`
export default Movies
