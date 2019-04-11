import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import Logo from '../../images/logo.png';

import {
   Layout, Menu, Breadcrumb, Icon, Avatar, PageHeader, Dropdown, message
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

      const menu = (
         <Menu onClick={onClick}>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
         </Menu>
      );

      const onClick = ({ key }) => {
         message.info(`Click on item ${key}`);
      };

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

                  <Menu.Item key="1">
                     <Icon type="home" />
                     <span>Home</span>
                  </Menu.Item>
                  <SubMenu
                     key="sub2"
                     title={<span><Icon type="user" /><span>Perfil</span></span>}
                  >
                     <Menu.Item key="3">Cadastrar</Menu.Item>
                     <Menu.Item key="4">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub3"
                     title={<span><Icon type="bank" /><span>Apiários</span></span>}
                  >
                     <Menu.Item key="5">Cadastrar</Menu.Item>
                     <Menu.Item key="6">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub4"
                     title={<span><Icon type="team" /><span>Apicultores</span></span>}
                  >
                     <Menu.Item key="7">Cadastrar</Menu.Item>
                     <Menu.Item key="8">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub5"
                     title={<span><Icon type="bank" /><span>Apiários</span></span>}
                  >
                     <Menu.Item key="9">Cadastrar</Menu.Item>
                     <Menu.Item key="10">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub6"
                     title={<span><Icon type="setting" /><span>Intervenções</span></span>}
                  >
                     <Menu.Item key="12">Listar</Menu.Item>
                  </SubMenu>
                  <SubMenu
                     key="sub7"
                     title={<span><Icon type="file-search" /><span>Relatórios</span></span>}
                  >
                     <Menu.Item key="13">Apiários</Menu.Item>
                     <Menu.Item key="14">Intervenções</Menu.Item>
                  </SubMenu>
               </Menu>

            </Sider>
            <Layout>

               <PageHeader
                  onBack={() => null}
                  backIcon={<Icon type="check" style={{ fontSize: '18pt' }} />}
                  title={<strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong></strong>}
                  subTitle="Sistema de monitoramneto de colmeias e apiários"
                  extra={<Dropdown overlay={menu}>
                     <a className="ant-dropdown-link" href="#">
                        Hover me, Click menu item <Icon type="down" />
                     </a>
                  </Dropdown>}


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