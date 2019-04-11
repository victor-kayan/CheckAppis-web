import React from 'react';

import { Router, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from './auth';
import ContentBee from './componentes/ContentBee';

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
    <Dashboard>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />


                <PrivateRoute path="/dashboard" component={Dashboard}>
                    <Router />
                    {/* <Route exact path="/home" component={ContentBee} /> */}
                </PrivateRoute>

            </Switch>
        </BrowserRouter>
    </Dashboard>
);

export default Routes;