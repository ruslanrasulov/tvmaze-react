import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './modules/configuration/reducers.js';

const configureStore = () => (
    createStore(reducers, applyMiddleware(promise, logger, thunk)));

export default configureStore;