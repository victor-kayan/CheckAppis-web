import React, { Component } from 'react';
import './App.css';
import Routes from './componentes/Routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SidebarBee from './componentes/SidebarBee';
import HeaderBee from './componentes/HeaderBee';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          {/* <SidebarBee /> */}
          <HeaderBee/>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
