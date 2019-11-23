export const getFilmInfo = (state) => state.shows.filmInfo;
export const getSearchResults = state => (state.shows.searchResults || []).map(r => ({
    id: r.id,
    name: r.name,
    genres: r.genres,
    year: r.year,
    imageUrl: r.imageUrl
}));