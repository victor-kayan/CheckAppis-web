import React, { Component } from "react";
import "antd/dist/antd.css";
import Logo from "../../images/logo.png";
import { Layout, Menu, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";

class SidebarBee extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { Sider } = Layout;
    const SubMenu = Menu.SubMenu;

    return (
      <Sider
        collapsible
        inline
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div style={{ textAlign: "center" }}>
          <Avatar
            style={{
              width: "50px",
              height: "50px",
              marginTop: "10px",
              marginBottom: "10px",
              textAlign: "center"
            }}
            size={64}
            src={Logo}
          />
        </div>
        <Menu theme="dark">
          <Menu.Item key="/home">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
        
          <Menu.Item key="perfil">
            <Link to="/apicultores/perfil">
              <span>
                <Icon type="user" />
                <span>Perfil</span>
              </span>
            </Link>
          </Menu.Item>
          
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="team" />
                <span>Apicultores</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/apicultores/list">Listar</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="bank" />
                <span>Apiários</span>
              </span>
            }
          >
            <Menu.Item key="8">
              <Link to="/apiarios/list">Listar</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="setting" />
                <span>Intervenções</span>
              </span>
            }
          >
            <Menu.Item key="12">Listar</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon type="file-search" />
                <span>Relatórios</span>
              </span>
            }
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
