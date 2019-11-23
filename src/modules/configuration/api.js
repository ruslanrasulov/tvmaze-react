import axios from 'axios';

export default {
    searchShows: query => axios.get(`http://api.tvmaze.com/search/shows?q=${query}`),
    getShowById: id => axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`)
}