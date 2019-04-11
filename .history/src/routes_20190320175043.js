import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />

            <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Layout>
            {/* <PrivateRoute path="*" /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;