import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './Header.scss';
import SearchFilms from '../SearchFilms/SearchFilms.jsx';
import FilmInfo from '../FilmInfo/FilmInfo.jsx';
import SearchLink from '../SearchLink/SearchLink.jsx';

export default class Header extends Component {
    render() {
        return (
            <section className="Header-block">
                <div className="Header-content">
                    <div className="Header-name">
                        TVmaze
                        <Route path="/film/:filmId" component={ SearchLink } />
                        <Switch>
                            <Route path="/film/:filmId" component={ FilmInfo } />
                            <Route path="/search/:query" component={ SearchFilms } />
                            <Route path="/" component={ SearchFilms } />
                        </Switch>
                    </div>
                </div>
            </section>
        );
    }
}