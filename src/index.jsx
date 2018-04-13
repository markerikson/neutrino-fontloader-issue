import React from "react";
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


const root = document.getElementById('root');
const load = () => render((
    <React.Fragment>
        <h2>Day 1</h2>
        <ul>
            <li><a href="first.html">First Page</a></li>
            <li><a href="second.html">Second Page</a></li>
        </ul>
    </React.Fragment>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
