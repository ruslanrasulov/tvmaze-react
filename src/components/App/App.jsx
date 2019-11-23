import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header.jsx';
import SearchResult from '../SearchResult/SearchResult.jsx';
import Footer from '../Footer/Footer.jsx';

class App extends Component {
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

export default connect(state => state)(App);