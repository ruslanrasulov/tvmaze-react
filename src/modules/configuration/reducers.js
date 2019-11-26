import { schema, normalize } from 'normalizr';

import * as actionTypes from './acitonTypes.js';

const mapFilmInfo = ({ data }) => ({
    id: data.id,
    name: data.name,
    genres: data.genres.join(', '),
    year: data.premiered,
    imageUrl: data.image && data.image.medium,
    duration: data.runtime,
    description: data.summary.replace(/<[^>]*>?/gm, ''),
    cast: data._embedded.cast.map(c => c.person.name).join(', ')
});

const filmsSchema = new schema.Entity('shows', {}, { 
    idAttribute: d => d.show.id,
    processStrategy: ({ show }) => ({
        id: show.id,
        name: show.name,
        genres: show.genres && show.genres.join(', '),
        year: show.premiered,
        imageUrl: show.image && show.image.medium
    })
});

const filmsArraySchema = [filmsSchema];

const mapSearchResults = ({ data }) => {
    const normalizedData = normalize(data, filmsArraySchema);

    return {
        allIds: normalizedData.result,
        byId: normalizedData.entities.shows
    };
}

export default (state = { }, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FILMS_BY_NAME:
            return {...state, searchResults: mapSearchResults(action.payload) };
        case actionTypes.SHOW_FILM_INFO_BY_ID:
            return {...state, filmInfo: mapFilmInfo(action.payload) };
        default: 
            return state;
    }
}