import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import { Router, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component {

   render() {
      return (
         <LayoutBee {...this.props}>
            <Switch>
               <Route path="/home" component={Login} />
            </Switch>
         </LayoutBee>
      );
   }
}

export default Dashboard;
