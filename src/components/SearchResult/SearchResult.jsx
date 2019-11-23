import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getSearchResults } from '../../modules/configuration/selectors';
import { getFilmByIdAction } from '../../modules/configuration/actions';

import ResultPreview from '../ResultPreview/ResultPreview.jsx';
import styles from './SearchResult.scss';

class SearchResult extends Component { 
    render() {
        const { searchResults, searchFilmById } = this.props;
        const results = searchResults.map(result => (
            <ResultPreview 
                key={result.id}
                filmInfo={result}
                searchFilmById={searchFilmById} />));

        return (
            <div className="SearchResult-container">
                {results}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchResults: getSearchResults(state)
});

const mapDispatchToProps = dispatch => ({
    searchFilmById: id => getFilmByIdAction(dispatch, id)
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SearchResult)
);