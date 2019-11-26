import api from './api';
import * as actionTypes from './acitonTypes';

export const searchFilmsAction = (dispatch, query) => {
    api.searchShows(query)
        .then(response => dispatch({ type: actionTypes.SEARCH_FILMS_BY_NAME, payload: {...response } }));
};

export const getFilmByIdAction = (dispatch, id) => {
    api.getShowById(id)
        .then(show => dispatch({ type: actionTypes.SHOW_FILM_INFO_BY_ID, payload: show }));
};