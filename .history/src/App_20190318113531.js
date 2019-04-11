import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// // import { clickButton, clickButton2, clickButton3 } from './redux/actions';
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
