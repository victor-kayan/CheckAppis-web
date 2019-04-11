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

      const {
         Content, Footer, Sider,
      } = Layout;
      const SubMenu = Menu.SubMenu;

      const onClick = ({ key }) => {
         message.info(`Você está sendo deslogado ${key}`);
         localStorage.removeItem('token');
      };

      const logout = ({ key }) => {
         localStorage.removeItem('token');
      };

      const menu = (
         <Menu>
            <Menu.Item key="1"><Icon type="user" /> Meus dados</Menu.Item>
            <Menu.Item onClick={logout} key="2"><Icon type="logout" /> Sair</Menu.Item>
         </Menu>
      );

      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>

            <SidebarBee />
            <LayoutBee />
         </Layout>
      );
   }
}
export default Dashboard;