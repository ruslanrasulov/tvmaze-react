import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from './../../modules/configuration/acitonTypes.js';
import styles from './ResultPreview.scss';
import axios from 'axios';

class ResultPreview extends Component {
    render() {
        return (
            <Link to={`/film/${this.props.id}`} onClick={(e) => { e.preventDefault(); this.props.searchFilmById(this.props.id); }}>
                <div className="ResultPreview-block">
                    <img src="http://placehold.it/200x275" className="ResultPreview-image" alt="Preview Image"/>
                    <div className="ResultPreview-caption">
                        <span className="ResultPreview-film-name">Film name</span>
                        <span className="ResultPreview-release-year">2017</span>
                    </div>
                    <div className="ResultPreview-genres">
                        Action &amp; Adventure
                    </div>
                </div>
            </Link>
        );
    }
}

const searchFilmById = (id) => (dispatch) => {
    axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then(response => {
            dispatch({ type: actionTypes.SHOW_FILM_INFO_BY_ID, payload: {...response } });
        });
}

const mapStateToProps = (state) => (
    state
);

const mapDispatchToProps = (dispatch) => ({
    searchFilmById: (id) => (
        dispatch(searchFilmById(id))
    )
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ResultPreview)
);