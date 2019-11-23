import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFilmByIdAction } from '../../modules/configuration/actions';
import { getFilmInfo } from '../../modules/configuration/selectors';

import styles from './FilmInfo.scss';

class FilmInfo extends Component {
    componentDidMount() {
        if (!this.props.filmInfo.name) {
            const filmId = this.props.match.params.filmId || '';

            if (filmId) {
                this.props.getFilmInfoFromApi(filmId);
            }
        }
    }

    render() {
        const { filmInfo } = this.props;

        return (
            <div className="FilmInfo-block">
                <img src={filmInfo.imageUrl} className="FilmInfo-main-image" alt="Film main image" />
                <main className="FilmInfo-main-info">
                    <div className="FilmInfo-film-name">{filmInfo.name}</div>
                    <div className="FilmInfo-additional-info">Oscar-winning Movies</div>
                    <div className="FilmInfo-year-and-duration">
                        <span className="FilmInfo-release-year">Release date: {filmInfo.year}</span>
                        <span className="FilmInfo-duration">Duration: {filmInfo.duration} min</span>
                    </div>
                    <p className="FilmInfo-description">{filmInfo.description}</p>
                    <p className="FilmInfo-genres">Genres: {filmInfo.genres}</p>
                    <p className="FilmInfo-cast">Cast: {filmInfo.cast}</p>
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getFilmInfoFromApi: (id) => getFilmByIdAction(dispatch, id)
});

const mapStateToProps = (state) => ({
    filmInfo: {...getFilmInfo(state)}
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FilmInfo)
);