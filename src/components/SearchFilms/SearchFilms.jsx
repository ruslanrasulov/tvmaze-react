import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'; 

import styles from './SearchFilms.scss';

class SearchFilms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fireRedirect: false
        };
    }

    componentDidMount() {
        this.input.value = this.props.match.params.query || '';
    }

    submitForm = (e) => {
        e.preventDefault();

        this.props.history.push(`/search/${this.input.value}`);
    } 

    render() {
        const { fireRedirect, query } = this.state;

        return (
            <form action="/search/" method="GET" className="SearchFilms-form" onSubmit={this.submitForm}>
                <label htmlFor="search-movie-input">Find your movie</label>
                <input type="text" id="search-movie-input" className="SearchFilms-input" name="query" ref={node => this.input = node}/>
                <div className="SearchFilms-buttons">
                    <button type="submit" className="SearchFilms-submit-btn">Search</button>
                </div>
            </form>
        );
    }
}

export default withRouter(SearchFilms);