import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchLink.scss';

export default class SearchLink extends Component {
    render() {
        return (
            <Link to="/" className="SearchLink">
                Search
            </Link>
        );
    }
}
