import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import { CombineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button>
          Clique aqui!
      </button>
        <h1>teste</h1>
      </div>
    );
  }
}

export default App;
