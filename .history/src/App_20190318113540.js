import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
class App extends Component {

  render() {

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <Routes />
      </div>
    );
  }
}

export default App;
