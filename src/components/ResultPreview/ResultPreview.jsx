import React, { Component } from 'react';
import styles from './ResultPreview.scss';

export default class ResultPreview extends Component {
    render() {
        return (
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
        );
    }
}