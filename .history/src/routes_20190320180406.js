import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

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
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />

            <PrivateRoute path="/dashboard" component={Dashboard}>
                <Route exact path="/home" component={ContentBee} />
            </PrivateRoute>

        </Switch>
    </BrowserRouter>
);

export default Routes;