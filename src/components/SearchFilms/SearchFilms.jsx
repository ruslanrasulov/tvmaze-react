import React, { Component } from 'react';
import styles from './SearchFilms.scss';

export default class SearchFilms extends Component {
    render() {
        return (
            <form action="#" className="SearchFilms-form">
                <label htmlFor="search-movie-input">Find your movie</label>
                <input type="text" id="search-movie-input" className="SearchFilms-input" />
                <div className="SearchFilms-buttons">
                    <button type="submit" className="SearchFilms-submit-btn">Search</button>
                </div>
            </form>
        );
    }
}
