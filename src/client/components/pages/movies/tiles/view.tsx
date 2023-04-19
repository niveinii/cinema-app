import React, { useState } from "react"
import styled from "styled-components"

import { useRecoilState } from "recoil"
import { MovieModal } from "../movieModal/view"
import { Tile } from "../../../designSystem/tile"
import { getSingleMovie } from "../../../../apis/movies"
import { Movie, MovieKeys } from "../../../../types/movies"
import { selectedMovieState } from "../../../../store/state"

type Props = {
  movies: Movie[]
}

export const Tiles = ({ movies }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = (): void => setIsModalOpen(true)
  const closeModal = (): void => setIsModalOpen(false)
  const [selectedMoviesState, setSelectedMovie] =
    useRecoilState(selectedMovieState)

  const buttonClickCallback = async (id: string): Promise<void> => {
    openModal()
    const selectedMovie = await getSingleMovie(id)
    setSelectedMovie(selectedMovie[0])
  }

  return (
    <Container>
      {movies.map((movie: Movie) => (
        <Tile
          id={movie[MovieKeys.Id]}
          key={movie[MovieKeys.Id]}
          title={movie[MovieKeys.Title]}
          image={movie[MovieKeys.Image]}
          buttonCb={buttonClickCallback}
          released={movie[MovieKeys.Released]}
          rating={parseFloat(movie[MovieKeys.Rating])}
        />
      ))}
      <MovieModal
        closeCb={closeModal}
        isModalOpen={isModalOpen}
        selectedMoviesState={selectedMoviesState}
      />
    </Container>
  )
}

const Container = styled.div`
  gap: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
