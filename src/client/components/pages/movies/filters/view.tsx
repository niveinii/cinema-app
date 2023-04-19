import React from "react"
import styled from "styled-components"
import { TextField } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"

import { Movie, MovieKeys } from "../../../../types/movies"

type Props = {
  movies: Movie[]
  filterCb: (e: any, value: string) => void
}
export const Filters = ({ movies, filterCb }: Props) => {
  return (
    <Container>
      <Autocomplete
        options={movies}
        getOptionLabel={(option: Movie) => option[MovieKeys.Title]}
        onInputChange={filterCb}
        renderInput={(params: any) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5%;
  height: 0;
  padding: 2%;
  @media screen and (max-width: 900px) {
    margin-bottom: 10%;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 20%;
  }
`
export default Filters
