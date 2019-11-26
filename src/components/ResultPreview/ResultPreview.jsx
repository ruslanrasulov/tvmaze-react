import React  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getSearchResultById } from '../../modules/configuration/selectors';
import { getFilmByIdAction } from '../../modules/configuration/actions';

import _ from './ResultPreview.scss';

const ResultPreview = ({ filmInfo, searchFilmById }) => (
    <Link className="ResultPreview-block" to={`/film/${filmInfo.id}`} onClick={() => { searchFilmById(filmInfo.id); }}>
        <div>
            <img src={filmInfo.imageUrl} className="ResultPreview-image" alt="Preview Image"/>
            <div className="ResultPreview-caption">
                <span className="ResultPreview-film-name">{filmInfo.name}</span>
                <span className="ResultPreview-release-year">{filmInfo.year}</span>
            </div>
            <div className="ResultPreview-genres">
                {filmInfo.genres}
            </div>
        </div>
    </Link>
);

const mapStateToProps = (state, props) => ({
    filmInfo: getSearchResultById(state, props.filmId)
});

const mapDispatchToProps = dispatch => ({
    searchFilmById: id => getFilmByIdAction(dispatch, id)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(ResultPreview);