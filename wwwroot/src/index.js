import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

/* GLOBAL VARIABLES */
// rust backend server
window.$server = "http://localhost:8080";

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);