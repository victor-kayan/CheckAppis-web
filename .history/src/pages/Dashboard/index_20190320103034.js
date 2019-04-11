import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import {
   Layout, Menu, Breadcrumb, Icon, Avatar, PageHeader, Dropdown, message
} from 'antd';
import HeaderBee from '../../componentes/HeaderBee';
import SidebarBee from '../../componentes/SidebarBee';

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
           
            <Layout>

               <HeaderBee />

               <div style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                     <Breadcrumb.Item>User</Breadcrumb.Item>
                     <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                     Bill is a cat.
                     </div>
               </div>
               <Footer style={{ textAlign: 'center' }}>
                  <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
               </Footer>
            </Layout>
         </Layout>
      );
   }
}
export default Dashboard;