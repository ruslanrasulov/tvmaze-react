import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as actionTypes from './acitonTypes.js';

const mapFilmInfo = ({ data }) => ({
    id: data.id,
    name: data.name,
    genres: data.genres,
    year: data.premiered,
    imageUrl: data.image.medium,
    duration: data.runtime,
    director: "Quentin Tarantino",
    description: data.summary
});

const mapSearchResults = ({ data }) => (
    map(data, ({ show }) => ({
        id: show.id,
        name: show.name,
        genres: show.genres,
        year: show.premiered,
        imageUrl: show.image.medium
    }))
);

export default combineReducers({
    shows: (state = { }, action) => {
        switch (action.type) {
            case actionTypes.SEARCH_FILMS_BY_NAME:
                return {...state, searchResults: mapSearchResults(action.payload) };
            case actionTypes.SHOW_FILM_INFO_BY_ID:
                return {...state, filmInfo: mapFilmInfo(action.payload) };
            default: 
                return state;
        }
    }
});