import React from "react"
import styled from "styled-components"

import { useRecoilValue } from "recoil"
import { Header } from "./header/view"
import { Movie } from "../../../types/movies"
import { moviesState } from "../../../store/state"
import { useFetchMovies } from "../../../hooks/useFetchMovies"
import { Logo } from "./logo/view"
import { Tiles } from "./tiles/view"

export const Movies = () => {
  const movies = useRecoilValue<Movie[]>(moviesState)
  useFetchMovies()
  return (
    <>
      <Logo />
      <Container>
        <Header />
        <TilesSection>
          <Tiles movies={movies} />
        </TilesSection>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 5%;
  background: #00d7ff 0 0 no-repeat padding-box;
  @media screen and (max-width: 1000px) {
    padding: 0;
    background: #00d7ff 0 0 no-repeat padding-box;
  }
`

const TilesSection = styled.div`
  margin-top: 5%;
`
export default Movies
