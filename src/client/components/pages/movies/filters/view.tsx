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
        onInputChange={filterCb}
        getOptionLabel={(option: Movie) => option[MovieKeys.Title]}
        renderInput={(params: any) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
      />
    </Container>
  )
}

const Container = styled.div`
  gap: 10px;
  height: 0;
  width: 30%;
  padding: 2%;
  display: flex;
  margin-bottom: 5%;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    margin-bottom: 10%;
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 20%;
    width: 90%;
  }
`
export default Filters
