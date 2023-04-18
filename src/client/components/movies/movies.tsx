import styled from "styled-components";

import { useFetchMovies } from "../../hooks/useFetchMovies";
import {moviesState} from "../../store/state";
import {useRecoilValue} from "recoil";
import {Movie} from "../../types/movies";


export const Movies = () => {
    const movies = useRecoilValue<Movie[]>(moviesState)
    useFetchMovies()
    console.log(movies)

    return (<StyledColorBlock>Hi!!!</StyledColorBlock>)
}



export const StyledColorBlock = styled.div`
    color:purple;
`
export default Movies