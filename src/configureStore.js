import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './modules/configuration/reducers.js';

let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production') {
    if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}


const configureStore = () => (
    createStore(reducers, composeEnhancers(applyMiddleware(promise, logger, thunk))));

export default configureStore;