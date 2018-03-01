import { combineReducers } from 'redux';
import * as actionTypes from './acitonTypes.js';

export default combineReducers({
    shows: (state = { name: 'eboy'}, action) => {
        switch (action.type) {
            case actionTypes.SEARCH_FILMS_BY_NAME:
                return {...state, searchResults: action.payload };
            case actionTypes.SHOW_FILM_INFO_BY_ID:
                return {...state, filmInfo: action.payload };
            default: 
                return state;
        }
    }
});