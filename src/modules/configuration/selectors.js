export const getFilmInfo = state => state.shows.filmInfo;
export const getSearchResultIds = state => (state.shows.searchResults || []).map(r => r.id);
export const getSearchResultById = (state, id) => state.shows.searchResults.find(sr => sr.id == id);