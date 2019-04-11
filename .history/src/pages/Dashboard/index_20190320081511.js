import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import Logo from '../../images/logo.png';

import {
   Layout, Menu, Breadcrumb, Icon, Avatar
} from 'antd';

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
         Header, Content, Footer, Sider,
      } = Layout;
      const SubMenu = Menu.SubMenu;

      return (
            <Layout style={{ minHeight: '100vh' }}>
               <Sider
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
               >
                  {/* <span><div className="logo-dashboard" /><span>B</span></span> */}
                  <strong className="logo-dashboard">Bee Check</strong>
                  
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                     
                     <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>Apicultores</span></span>}
                     >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                     </SubMenu>
                  </Menu>
               </Sider>
               <Layout>
                  <Header style={{ background: '#fff', padding: 0 }} />
                  <Content style={{ margin: '0 16px' }}>
                     <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                     </Breadcrumb>
                     <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        Bill is a cat.
            </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                     Ant Design ©2018 Created by Ant UED
                   </Footer>
               </Layout>
            </Layout>
      );
   }
}
export default Dashboard;