import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';

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
