import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import { Router, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from './auth';

class App extends Component {

  render() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
      />
    )

    return (
      <div className="App">
        
      </div >
    );
  }
}

export default App;

