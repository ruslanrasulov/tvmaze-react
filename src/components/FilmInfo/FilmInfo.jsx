import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './FilmInfo.scss';

export default class FilmInfo extends Component {
    render() {
        return (
            <div className="FilmInfo-block">
                <img src="http://placehold.it/200x275" className="FilmInfo-main-image" alt="Film main image" />
                <main className="FilmInfo-main-info">
                    <div className="FilmInfo-film-name">Film name</div>
                    <div className="FilmInfo-additional-info">Oscar-winning Movies</div>
                    <div className="FilmInfo-year-and-duration">
                        <span className="FilmInfo-release-year">2017</span>
                        <span className="FilmInfo-duration">120 min</span>
                    </div>
                    <p className="FilmInfo-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi repudiandae reiciendis temporibus rerum aut harum cumque voluptate illo minima maxime vel distinctio sequi laborum qui omnis veritatis dicta eum sed numquam repellat eaque deserunt, consequatur, nulla minus! Sunt, hic optio odit, aperiam ea temporibus aliquam facilis, et maiores quia illum.</p>
                    <p className="FilmInfo-director">Director: Quentin Tarantino</p>
                    <p className="FilmInfo-cast">
                        Cast: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ad reprehenderit praesentium modi error dolores minus non voluptatibus. Ad necessitatibus officiis veritatis ab esse aut harum inventore debitis dolor deserunt.
                    </p>
                </main>
            </div>
        );
    }
}