import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';
import SidebarBee from '../../componentes/SidebarBee';

import {
   Layout, Menu, Breadcrumb, Icon,
 } from 'antd';


class Dashboard extends Component {

   render() {
      return (
         <Layout style={{ minHeight: '100vh' }}>

             <SidebarBee/>
             <HeaderBee/>

             <FooterBee/>
          </div>
          </Layout>
      );
   }
}
export default Dashboard;
