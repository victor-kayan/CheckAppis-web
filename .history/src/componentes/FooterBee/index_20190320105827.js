import React from 'react';
import 'antd/dist/antd.css';
import {
    Footer
} from 'antd';

const FooterBee = () => {
    <div>
        <Footer style={{ textAlign: 'center' }}>
            <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
        </Footer>
    </div>
}

export default {FooterBee};



import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {
    Menu, Icon, Avatar, PageHeader, Dropdown, message
} from 'antd';

class FooterBee extends Component {

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
            <Footer style={{ textAlign: 'center' }}>
            <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
        </Footer>
        );
    }
}
export default FooterBee;