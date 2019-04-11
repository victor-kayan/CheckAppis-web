import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Logo from '../../images/logo.png';

import {
   Layout, Menu, Icon, Avatar, message
} from 'antd';

class SidebarBee extends Component {

   state = {
      collapsed: false,
   };

   onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
   }

   render() {

      const {
         Sider,
      } = Layout;
      const SubMenu = Menu.SubMenu;

      return (
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
                  title={<span><Icon type="team" /><span>Apicultores</span></span>}
               >
                  <Menu.Item key="5">Cadastrar</Menu.Item>
                  <Menu.Item key="6">Listar</Menu.Item>
               </SubMenu>
               <SubMenu
                  key="sub4"
                  title={<span><Icon type="bank" /><span>Apiários</span></span>}
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
      );
   }
}
export default SidebarBee;