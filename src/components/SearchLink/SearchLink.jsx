import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './SearchLink.scss';

class SearchLink extends Component {
    render() {
        return (
            <Link to="/" className="SearchLink">
                Search
            </Link>
        );
    }
}

export default withRouter(SearchLink);