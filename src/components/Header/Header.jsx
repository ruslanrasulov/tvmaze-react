import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import SearchFilms from '../SearchFilms/SearchFilms.jsx';
import FilmInfo from '../FilmInfo/FilmInfo.jsx';
import SearchLink from '../SearchLink/SearchLink.jsx';

import _ from './Header.scss';

const Header = () => (
    <section className="Header-block">
        <div className="Header-content">
            <div className="Header-name">
                TVmaze
                <Route path="/film/:filmId" component={SearchLink} />
                <Switch>
                    <Route path="/film/:filmId" component={FilmInfo} />

                    <Route path="/search/:query" component={SearchFilms} />
                    <Route path="/search/" component={SearchFilms} />
                    <Route path="/*" component={SearchFilms} />
                </Switch>
            </div>
        </div>
    </section>
);

export default withRouter(Header);