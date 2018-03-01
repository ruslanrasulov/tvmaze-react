import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './ResultPreview.scss';

class ResultPreview extends Component {
    render() {
        return (
            <Link to={`/film/${this.props.id}`}>
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

export default withRouter(ResultPreview);