import axios from 'axios';

const url = process.env.API_URL;

export default {
    searchShows: query => axios.get(`${url}search/shows?q=${query}`),
    getShowById: id => axios.get(`${url}shows/${id}?embed=cast`)
}