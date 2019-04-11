import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import Logo from '../../images/logo.png';
import SidebarBee from '../../componentes/SidebarBee';

import {
   Layout, Menu, Breadcrumb, Icon, Avatar, PageHeader, Dropdown, message
} from 'antd';
import LayoutBee from '../../componentes/LayoutBee';

class Dashboard extends Component {

   state = {
      collapsed: false,
   };

   onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
   }

   componentDidMount() {
      //localStorage.removeItem('token');
   }

   render() {

      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <LayoutBee />
         </Layout>
      );
   }
}
export default Dashboard;