import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField } from "@material-ui/core"

import styled from "styled-components"
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
      {/*<ButtonsContainer>*/}
      {/*  <Button variant="outlined">Last 5 years</Button>*/}
      {/*  <Button variant="outlined">Last 10 years</Button>*/}
      {/*  <Button variant="outlined">Last 15 years</Button>*/}
      {/*  <Button variant="outlined">All time!</Button>*/}
      {/*</ButtonsContainer>*/}
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
`
// const ButtonsContainer = styled.div`
//   display: flex;
//   gap: 10px;
// `
export default Filters
