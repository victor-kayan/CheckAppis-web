import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import Login from '../Login';
import ContentBee from '../../componentes/ContentBee';


class Dashboard extends Component {

   render() {
      return (
         <LayoutBee {...this.props}/>
      );
   }
}

export default Dashboard;
