"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Page from './components/Page';

var info = require('./data.json');
//info=JSON.parse(info);
ReactDOM.render(<Page info={info}/>, document.getElementById('container') );

