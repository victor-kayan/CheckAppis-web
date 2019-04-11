import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from './auth';
// import Registro from './'

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
            <PrivateRoute path="/login" component={Login} />
            {/* <Route exact path="/registre-se" component={Registro} /> */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
            {/* <Route path="/products/:id" component={Product}/>
            <Route exact path="/mudanca/password/:id" component={Password}/> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;