import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import Logo from '../../images/logo.png';

import {
   Layout, Menu, Breadcrumb, Icon, Avatar, PageHeader, Dropdown, message
} from 'antd';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';
import SidebarBee from '../../componentes/SidebarBee';

class LayoutBee extends Component {

   state = {
      collapsed: false,
   };

   onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
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
         <Layout>

            <SidebarBee />
            <HeaderBee />

            <Content style={{ margin: '0 16px' }}>
               <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Perfil</Breadcrumb.Item>
               </Breadcrumb>
               <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  Bill is a cat.
                     </div>
            </Content >
            <FooterBee />
         </Layout>
      );
   }
}
export default LayoutBee;