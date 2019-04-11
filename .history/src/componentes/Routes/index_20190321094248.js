import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';
import { isAuthenticated } from '../../componentes/Auth';
import ContentBee from '../ContentBee';

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

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />
        </Switch>
    </Router>
);

export default Routes;