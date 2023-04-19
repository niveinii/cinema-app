import React from "react"
import GenericModal from "../../../generics/modal"
import { Movie, MovieKeys } from "../../../../types/movies"

type Props = {
  isModalOpen: boolean
  selectedMoviesState: Movie | undefined
  closeCb: () => void
}

export const MovieModal = ({
  selectedMoviesState,
  isModalOpen,
  closeCb,
}: Props) => {
  console.log(selectedMoviesState)
  return (
    <GenericModal isOpen={isModalOpen} handleClose={closeCb}>
      <div>{selectedMoviesState?.[MovieKeys.Image]}</div>
    </GenericModal>
  )
}
