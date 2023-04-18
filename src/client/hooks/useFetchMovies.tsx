import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import {APIS} from "../config/consts";
import { moviesState } from '../store/state';

export function useFetchMovies() {
    const setMovies = useSetRecoilState(moviesState);

    useEffect(() => {
        fetch(APIS.GET_ALL_MOVIES)
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);

    return;
}
