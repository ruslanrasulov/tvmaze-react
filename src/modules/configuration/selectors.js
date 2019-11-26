export const getFilmInfo = state => state.shows.filmInfo;
export const getSearchResultIds = state => state.shows.searchResults && state.shows.searchResults.allIds;
export const getSearchResultById = (state, id) => state.shows.searchResults.byId[id];