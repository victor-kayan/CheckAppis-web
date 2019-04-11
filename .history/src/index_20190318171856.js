import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(

  <Provider store={Store}>
    <link rel="shortcut icon" href="./images/logo.png"></link>
    <App />
  </Provider>
  , document.getElementById('root'));

