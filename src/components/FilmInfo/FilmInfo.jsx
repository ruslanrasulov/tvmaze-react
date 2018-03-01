import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFilmInfo } from './../../modules/configuration/selectors.js';
import styles from './FilmInfo.scss';

class FilmInfo extends Component {
    render() {
        const { filmInfo } = this.props;

        return (
            <div className="FilmInfo-block">
                <img src={filmInfo.imageUrl} className="FilmInfo-main-image" alt="Film main image" />
                <main className="FilmInfo-main-info">
                    <div className="FilmInfo-film-name">{filmInfo.name}</div>
                    <div className="FilmInfo-additional-info">Oscar-winning Movies</div>
                    <div className="FilmInfo-year-and-duration">
                        <span className="FilmInfo-release-year">{filmInfo.year}</span>
                        <span className="FilmInfo-duration">{filmInfo.duration} min</span>
                    </div>
                    <p className="FilmInfo-description">{filmInfo.description}</p>
                    <p className="FilmInfo-director">Director: {filmInfo.director}</p>
                    <p className="FilmInfo-cast">
                        Cast: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ad reprehenderit praesentium modi error dolores minus non voluptatibus. Ad necessitatibus officiis veritatis ab esse aut harum inventore debitis dolor deserunt.
                    </p>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filmInfo: getFilmInfo(state)
});

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(FilmInfo)
);