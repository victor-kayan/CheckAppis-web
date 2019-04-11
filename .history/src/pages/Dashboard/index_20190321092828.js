import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';


class Dashboard extends Component {

   render() {
      return (
          <div>

             <SidebarBee/>
             <HeaderBee/>

             <FooterBee/>
          </div>
      );
   }
}
export default Dashboard;
