import React, { Component } from 'react';

import styles from './Header.scss';
import SearchFilms from '../SearchFilms/SearchFilms.jsx';

export default class Header extends Component {
    render() {
        return (
            <section className="Header-block">
                <div className="Header-content">
                    <div className="Header-name">
                        TVmaze
                        <SearchFilms />
                    </div>
                </div>
            </section>
        );
    }
}