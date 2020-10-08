import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// StrictMode is a tool for highlighting potential problems in an application. 
// Like Fragment, StrictMode does not render any visible UI.
// It activates additional checks and warnings for its descendants.
// StrictMode renders components twice (on dev but not production). 
// https://reactjs.org/docs/strict-mode.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
