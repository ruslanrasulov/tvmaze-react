import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as actionTypes from './../../modules/configuration/acitonTypes.js';
import styles from './ResultPreview.scss';
import axios from 'axios';

class ResultPreview extends Component {
    render() {
        const {filmInfo, searchFilmById } = this.props;
        return (
            <Link className="ResultPreview-block" to={`/film/${filmInfo.id}`} onClick={() => { searchFilmById(filmInfo.id); }}>
                <div>
                    <img src={filmInfo.imageUrl} className="ResultPreview-image" alt="Preview Image"/>
                    <div className="ResultPreview-caption">
                        <span className="ResultPreview-film-name">{filmInfo.name}</span>
                        <span className="ResultPreview-release-year">{filmInfo.year}</span>
                    </div>
                    <div className="ResultPreview-genres">
                        {filmInfo.genres.join(', ')}
                    </div>
                </div>
            </Link>
        );
    }
}

export default withRouter(ResultPreview);