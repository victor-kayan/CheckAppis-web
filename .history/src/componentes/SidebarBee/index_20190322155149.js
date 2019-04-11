import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Logo from '../../images/logo-be-check.png';
import {
   Layout, Menu, Icon, Avatar
} from 'antd';
import { Link } from 'react-router-dom';

class SidebarBee extends Component {

   state = {
      collapsed: false,
   };

   onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
   }

   componentWillMount(nextProps) {
      console.log(nextProps);
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
            <Link to="/">
               <div style={{ textAlign: 'center' }}>
                  <Avatar style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }} size={64} src={Logo} />
               </div>
            </Link>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
               <Menu.Item key="/">
                  <Link to="/">
                     <Icon type="home" />
                     <span>
                     <Avatar style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }} size={64} src={Logo} />
                     </span>
                  </Link>
               </Menu.Item>
               <SubMenu
                  key="sub2"
                  title={<span><Icon type="user" /><span>Perfil</span></span>}
               >
                  <Menu.Item key="3">Cadastrar
                  <Link to="/sobre"><span>Home</span></Link></Menu.Item>
                  <Menu.Item key="4">Listar</Menu.Item>
               </SubMenu>
               <SubMenu
                  key="sub3"
                  title={<span><Icon type="team" /><span>Apicultores</span></span>}
               >
                  <Menu.Item key="5">Cadastrar</Menu.Item>
                  <Menu.Item key="6">
                     <Link to="/apicultores/list">Listar</Link>
                  </Menu.Item>
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
                  title={<span><Icon type="setting" /><span>Intervenções</span></span>}
               >
                  <Menu.Item key="12">Listar</Menu.Item>
               </SubMenu>
               <SubMenu
                  key="sub6"
                  title={<span><Icon type="file-search" /><span>Relatórios</span></span>}
               >
                  <Menu.Item key="13">Apiários</Menu.Item>
                  <Menu.Item key="14">Intervenções</Menu.Item>
               </SubMenu>
            </Menu>
         </Sider >
      );
   }
}

export default SidebarBee;