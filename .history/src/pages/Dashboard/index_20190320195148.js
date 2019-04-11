import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import { Router, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import ContentBee from '../../componentes/ContentBee';

class Dashboard extends Component {

   render() {
      return (
         <LayoutBee>
            <Switch>
               <Route path="/home" component={ContentBee} />
            </Switch>
         </LayoutBee>
      );
   }
}

export default Dashboard;
