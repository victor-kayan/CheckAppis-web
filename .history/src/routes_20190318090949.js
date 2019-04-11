import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Main from './pages/dashboard';
// import Product from './pages/product';
// import Password from './pages/password';
import Login from './pages/Login'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            {/* <Route path="/products/:id" component={Product}/>
            <Route exact path="/mudanca/password/:id" component={Password}/> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;