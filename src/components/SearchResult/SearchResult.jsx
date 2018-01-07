import React, { Component } from 'react';

import ResultPreview from '../ResultPreview/ResultPreview.jsx';
import styles from './SearchResult.scss';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.fillResults();
        console.log(this.state.results);
    }

    fillResults() {
        for (let i = 0; i < 10; i++) {
            this.setState((prevState) => {
                return {
                    results: [...prevState.results, <ResultPreview key={i} />]
                }
            });
        }
    }

    render() {
        return (
            <div className="SearchResult-container">
                { this.state.results }
            </div>
        );
    }
}