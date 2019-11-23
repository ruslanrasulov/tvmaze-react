import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchFilms from '../SearchFilms/SearchFilms.jsx';
import FilmInfo from '../FilmInfo/FilmInfo.jsx';
import SearchLink from '../SearchLink/SearchLink.jsx';

import { searchFilmsAction } from '../../modules/configuration/actions';

import styles from './Header.scss';

class Header extends Component {
    render = () => (
        <section className="Header-block">
            <div className="Header-content">
                <div className="Header-name">
                    TVmaze
                    <Route path="/film/:filmId" component={ SearchLink } />
                    <Switch>
                        <Route path="/film/:filmId" component={ FilmInfo } />

                        <Route path="/search/:query" exact render={(...props) => <SearchFilms searchFilms={this.props.searchFilms} {...props}/>} />
                        <Route path="/search/" exact render={(...props) => <SearchFilms searchFilms={this.props.searchFilms} {...props}/>} />
                        <Route path="/" exact render={(...props) => <SearchFilms searchFilms={this.props.searchFilms} {...props}/>} />
                    </Switch>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = ({ filmInfo }) => ({ filmInfo });

const mapDispatchToProps = (dispatch) => ({
    searchFilms: (query) => searchFilmsAction(dispatch, query)
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);