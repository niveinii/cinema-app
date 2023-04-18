import React from "react"
import styled from "styled-components"
import { Tile } from "../../../generics/tile"
import { Movie, MovieKeys } from "../../../../types/movies"
type Props = {
  movies: Movie[]
}
export const Tiles = ({ movies }: Props) => {
  return (
    <Container>
      {movies.map((movie: Movie) => (
        <Tile
          key={movie[MovieKeys.Id]}
          title={movie[MovieKeys.Title]}
          image={movie[MovieKeys.Image]}
          rating={parseInt(movie[MovieKeys.Rating])}
          description={movie[MovieKeys.Synopsis]}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
`
