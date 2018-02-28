import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './modules/configuration/reducers.js';

const configureStore = () => (
    createStore(reducers, [promise]));

export default configureStore;