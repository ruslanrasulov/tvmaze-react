import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import SearchResult from '../SearchResult/SearchResult.jsx';
import Footer from '../Footer/Footer.jsx';

export default class App extends Component {
    render() {
        return (
            <section className="container">
                <Header />
                <SearchResult />
                <Footer />
            </section>  
        );
    }
}