import React from 'react';
import { render } from 'react-dom';
import app from './App';
import model from './model';

const startApp = app(React);

render(startApp(model), document.getElementById('app'));

