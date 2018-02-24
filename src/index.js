import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App/App.jsx';
import styles from './index.scss';

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('root')
);