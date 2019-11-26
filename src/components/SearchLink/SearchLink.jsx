import React from 'react';
import { Link } from 'react-router-dom';

import _ from './SearchLink.scss';

const SearchLink = () => (
    <Link to="/" className="SearchLink">
        Search
    </Link>
);

export default SearchLink;