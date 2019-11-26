import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';

import { searchFilmsAction } from '../../modules/configuration/actions';

import _ from './SearchFilms.scss';

class SearchFilms extends Component {
    componentDidMount() {
        const { match, searchFilms } = this.props;
        this.input.value = match.params.query || '';

        if (this.input.value) {
            searchFilms(this.input.value);
        }
    }

    submitForm = (e) => {
        const { history, searchFilms } = this.props;
        
        e.preventDefault();

        history.push(`/search/${this.input.value}`);
        searchFilms(this.input.value);
    } 

    render() {
        return (
            <form action="/search/" method="GET" className="SearchFilms-form" onSubmit={this.submitForm}>
                <label htmlFor="search_movie_input">Find your movie</label>
                <input type="text" id="search_movie_input" className="SearchFilms-input" name="query" ref={node => this.input = node}/>
                <div className="SearchFilms-buttons">
                    <button type="submit" className="SearchFilms-submit-btn">Search</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    searchFilms: query => searchFilmsAction(dispatch, query)
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps)
(SearchFilms));