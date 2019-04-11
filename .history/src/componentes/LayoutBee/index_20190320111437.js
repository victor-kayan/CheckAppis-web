import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
   Layout
} from 'antd';
import HeaderBee from '../../componentes/HeaderBee';
import SidebarBee from '../../componentes/SidebarBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';

class Dashboard extends Component {

   render() {

      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <SidebarBee />
            <Layout>
               <HeaderBee />
               <ContentBee nome="Claudio Rodrigo Marcelino" />
               <FooterBee />
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;