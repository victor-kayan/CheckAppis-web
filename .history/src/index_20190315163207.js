import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();