import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import Logo from '../../images/logo.png';

import {
   Layout, Menu, Breadcrumb, Icon, Avatar, PageHeader
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
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <Sider
               collapsible
               collapsed={this.state.collapsed}
               onCollapse={this.onCollapse}
            >
               <div style={{ textAlign: 'center' }}>
                  <Avatar style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }} size={64} src={Logo} />
               </div>

               <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                  <SubMenu
                     key="sub1"
                     title={<span><Icon type="team" /><span>Apicultores</span></span>}
                  >
                     <Menu.Item key="1">Cadastrar</Menu.Item>
                     <Menu.Item key="2">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub2"
                     title={<span><Icon type="bank" /><span>Apiários</span></span>}
                  >
                     <Menu.Item key="4">Cadastrar</Menu.Item>
                     <Menu.Item key="5">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub3"
                     title={<span><Icon type="setting" /><span>Intervenções</span></span>}
                  >
                     <Menu.Item key="7">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub4"
                     title={<span><Icon type="file-search" /><span>Relatórios</span></span>}
                  >
                     <Menu.Item key="10">Apiários</Menu.Item>
                     <Menu.Item key="11">Intervenções</Menu.Item>
                  </SubMenu>
               </Menu>

            </Sider>
            <Layout>
               <PageHeader
                  onBack={"ds"}
                  title={<strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong></strong>}
                  subTitle="Sistema de monitoramneto de colmeias e apiários"
               />
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
                  <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
               </Footer>
            </Layout>
         </Layout>
      );
   }
}
export default Dashboard;