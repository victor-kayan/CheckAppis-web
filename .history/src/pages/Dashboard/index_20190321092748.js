import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import HeaderBee from '../../componentes/FooterBee';


class Dashboard extends Component {

   render() {
      return (
          <div>
             <HeaderBee/>

             <FooterBee/>
          </div>
      );
   }
}
export default Dashboard;
