import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
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
        <Router>
          <Switch>

            {/* CUSTOM ROUTES */}
            <Route exact path="/login" component={Login} />
            {/* <Route.Custom path="/registro" component={Registro} />
            <Route.Custom path="/password/reset/:token" component={ResetPassword} /> */}

            {/* PRIVATE ROUTES */}
            <Route.Private path="/monitor" component={DashboardMonitor} />
            <Route.Private path="/" component={DashboardAnalise} />

          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;

