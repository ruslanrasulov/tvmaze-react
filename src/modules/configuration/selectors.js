export const getFilmInfo = state => state.filmInfo;
export const getSearchResultIds = state => state.searchResults && state.searchResults.allIds;
export const getSearchResultById = (state, id) => state.searchResults.byId[id];