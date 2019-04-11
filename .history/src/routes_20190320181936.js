import React from 'react';

import { Router, BrowserRouter, Switch, Route, Redirect, browserHistory } from 'react-router';

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

    <Router history={browserHistory} >
        <Route exact path="/login" component={Login} />


        <PrivateRoute path="/dashboard" component={Dashboard}>
            <Router />
            {/* <Route exact path="/home" component={ContentBee} /> */}
        </PrivateRoute>
    </Router>


);

export default Routes;

{/* <Router history={hashHistory}>
        <Route component={App} path="/">
            <Route component={Home} path="/home"></Route>
            <Route component={View1} path="/view1"></Route>
            <Route component={View2} path="/view2"></Route>
        </Route>
    </Router>, */}
