import axios from 'axios';

export const getShows = (pageNumber = 0) => {
    axios.get(`http://api.tvmaze.com/shows?page=${pageNumber}`)
        .then(response => {
            console.log(response);
        });
};

export const searchShows = (query) => {
    axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => {
            console.log(response);
        });
};

export const getShowById = (id) => {
    axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then(response => {
            console.log(response);
        });
}