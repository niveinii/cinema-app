import React, { useState } from "react"
import styled from "styled-components"
import { Tile } from "../../../generics/tile"
import { Movie, MovieKeys } from "../../../../types/movies"
import { MovieModal } from "../movieModal/view"
import { useRecoilState } from "recoil"
import { selectedMovieState } from "../../../../store/state"
import { getSingleMovie } from "../../../../apis/movies"
type Props = {
  movies: Movie[]
}
export const Tiles = ({ movies }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModal = (): void => setIsModalOpen(true)
  const closeModal = (): void => setIsModalOpen(false)
  const [selectedMoviesState, setSelectedMovie] =
    useRecoilState(selectedMovieState)

  const buttonClickCallback = async (id: string) => {
    openModal()
    const selectedMovie = await getSingleMovie(id)
    setSelectedMovie(selectedMovie[0])
  }

  return (
    <Container>
      {movies.map((movie: Movie) => (
        <Tile
          key={movie[MovieKeys.Id]}
          id={movie[MovieKeys.Id]}
          title={movie[MovieKeys.Title]}
          image={movie[MovieKeys.Image]}
          rating={parseFloat(movie[MovieKeys.Rating])}
          released={movie[MovieKeys.Released]}
          buttonCb={buttonClickCallback}
        />
      ))}
      <MovieModal
        selectedMoviesState={selectedMoviesState}
        isModalOpen={isModalOpen}
        closeCb={closeModal}
      />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
`
