import React, { Component } from 'react';
import styles from './SearchFilms.scss';

export default class SearchFilms extends Component {
    render() {
        console.log(this.props.match.params.query);
        return (
            <form action="/search/" method="GET" className="SearchFilms-form">
                <label htmlFor="search-movie-input">Find your movie</label>
                <input type="text" id="search-movie-input" name="query" className="SearchFilms-input" />
                <div className="SearchFilms-buttons">
                    <button type="submit" className="SearchFilms-submit-btn">Search</button>
                </div>
            </form>
        );
    }
}
