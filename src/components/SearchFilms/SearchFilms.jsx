import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'; 

import styles from './SearchFilms.scss';

export default class SearchFilms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fireRedirect: false
        };
    }

    componentDidMount() {
        this.input.value = this.props.match.params.query || '';
    }

    submitForm(e) {
        e.preventDefault();

        this.setState({
            fireRedirect: true,
            query: this.input.value
        });
    } 

    render() {
        const { fireRedirect, query } = this.state;

        return (
            <form action="/search/" method="GET" className="SearchFilms-form" onSubmit={(e) => this.submitForm(e)}>
                <label htmlFor="search-movie-input">Find your movie</label>
                <input type="text" id="search-movie-input" className="SearchFilms-input" name="query" ref={node => this.input = node}/>
                <div className="SearchFilms-buttons">
                    <button type="submit" className="SearchFilms-submit-btn">Search</button>
                </div>
                {fireRedirect && <Redirect to={`/search/${query}`} />}
            </form>
        );
    }
}
