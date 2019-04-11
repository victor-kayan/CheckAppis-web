import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SidebarBee from './componentes/SidebarBee';
import HeaderBee from './componentes/HeaderBee';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <HeaderBee />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
