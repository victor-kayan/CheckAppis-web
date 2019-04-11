import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from './auth';

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

const Routes = (prop) => (
    <Router>
        <Switch>
            <Route exact path={this.props.path} component={this.props.component} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
);

export default Routes;