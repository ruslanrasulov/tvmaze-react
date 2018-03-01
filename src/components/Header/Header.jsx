import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from './../../modules/configuration/acitonTypes.js';
import styles from './Header.scss';
import SearchFilms from '../SearchFilms/SearchFilms.jsx';
import FilmInfo from '../FilmInfo/FilmInfo.jsx';
import SearchLink from '../SearchLink/SearchLink.jsx';
import { searchShows } from './../../modules/configuration/api.js';
import axios from 'axios';

class Header extends Component {
    render() {
        return (
            <section className="Header-block">
                <div className="Header-content">
                    <div className="Header-name">
                        TVmaze
                        {/* TODO: combine SearchLink with FilmInfo */}
                        <Route path="/film/:filmId" component={ SearchLink } />
                        <Switch>
                            <Route path="/film/:filmId" component={ FilmInfo } />

                            {/* Exctract SearchFilms render to an another function */}
                            <Route path="/search/:query" exact render={(...props) => <SearchFilms searchFilms={this.props.searchFilms} {...props}/>} />
                            <Route path="/search/" exact render={(...props) => <SearchFilms searchFilms={this.props.searchFilms} {...props}/>} />
                            <Route path="/" exact render={(...props) => <SearchFilms searchFilms={this.props.searchFilms} {...props}/>} />
                        </Switch>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ filmInfo }) => ({
    filmInfo
});

{/* TODO: Move action creator to an another file */}
const searchFilms = (query) => (dispatch) => {
    axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => {
            dispatch({ type: actionTypes.SEARCH_FILMS_BY_NAME, payload: {...response } });
        });
};

const mapDispatchToProps = (dispatch) => ({
    searchFilms: (query) => (
        dispatch(searchFilms(query))
    )
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);