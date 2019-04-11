import React from 'react';

import { BrowserRouter, Switch, Route, Redirect, browserHistory } from 'react-router-dom';

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

            <Router history={browserHistory}>
                <Route path="/" component={Header}>
                    <Route path="/Home" component={Home} />
                    <Route path="/Sign-In" component={SignIn} />
                    <Route path="/Register" component={Register} />
                </Route>
            </Router>

            <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Layout>
            {/* <PrivateRoute path="*" /> */}
        </Switch>
    </BrowserRouter>

    // <span>
    //     <Router history={browserHistory}>
    //         <Route path="/" component={Header}>
    //             <Route path="/Home" component={Home} />
    //             <Route path="/Sign-In" component={SignIn} />
    //             <Route path="/Register" component={Register} />
    //         </Route>
    //     </Router>
    // </span>
    // <span>
    //     <Router history={browserHistory}>
    //         <Route path="/" component={RT_Footer}>
    //             <Route path="/About Us" component={About} />
    //             <Route path="/Terms & Conditions" component={TC} />
    //             <Route path="/Register" component={Register} />
    //         </Route>
    //     </Router>
    // </span>


);

export default Routes;