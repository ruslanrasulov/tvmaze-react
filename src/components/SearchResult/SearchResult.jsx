import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { map } from 'lodash';
import axios from 'axios';
import * as actionTypes from './../../modules/configuration/acitonTypes.js';

import ResultPreview from '../ResultPreview/ResultPreview.jsx';
import styles from './SearchResult.scss';

class SearchResult extends Component { 
    render() {
        const { searchResults, searchFilmById } = this.props;
        const results = map(searchResults, (result) => {
            const filmInfo = {
                id: result.id,
                name: result.name,
                genres: result.genres,
                year: result.year,
                imageUrl: result.imageUrl
            }
        
            return <ResultPreview 
                        key={filmInfo.id}
                        filmInfo={filmInfo}
                        searchFilmById={searchFilmById} 
                    />
        })
        console.log(this.props);
        return (
            <div className="SearchResult-container">
                {results}
            </div>
        );
    }
}

const searchFilmById = (id) => (dispatch) => {
    axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then(response => {
            dispatch({ type: actionTypes.SHOW_FILM_INFO_BY_ID, payload: {...response } });
        });
}

const mapStateToProps = (state) => ({
    searchResults: state.shows.searchResults,
    searchFilmById 
});

const mapDispatchToProps = (dispatch) => ({
    searchFilmById: (id) => (
        dispatch(searchFilmById(id))
    )
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SearchResult)
);