import React, { Component } from 'react';
import './App.css';
import Routes from './componentes/Routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SidebarBee from './componentes/SidebarBee';
import HeaderBee from './componentes/HeaderBee';
import Dashboard from './pages/Dashboard';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          {/* <Dashboard/> */}
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
