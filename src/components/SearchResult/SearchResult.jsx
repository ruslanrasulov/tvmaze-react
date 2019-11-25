import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchResultIds } from '../../modules/configuration/selectors';

import ResultPreview from '../ResultPreview/ResultPreview.jsx';
import _ from './SearchResult.scss';

class SearchResult extends Component { 
    render() {
        const { searchResultIds } = this.props;
        const results = searchResultIds.map(id => (
            <ResultPreview key={id} filmId={id} />
        ));

        return (
            <div className="SearchResult-container">
                {results}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchResultIds: getSearchResultIds(state)
});

export default connect(mapStateToProps, null)(SearchResult)