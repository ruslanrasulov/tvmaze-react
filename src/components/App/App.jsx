import React from 'react';

import Header from '../Header/Header.jsx';
import SearchResult from '../SearchResult/SearchResult.jsx';
import Footer from '../Footer/Footer.jsx';

const App = () => (
    <section className="container">
        <Header />
        <SearchResult />
        <Footer />
    </section>
);

export default App;