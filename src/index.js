import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Game from './game';
import initialize from './initialize';
import SimpleClientLogger from './simpleClientLogger';

initialize();
const simpleClientLogger = new SimpleClientLogger({});
simpleClientLogger.init();

ReactDOM.render(<Game />, document.getElementById("root"));

