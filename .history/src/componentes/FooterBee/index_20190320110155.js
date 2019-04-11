import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class FooterBee extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
            </Footer>
        );
    }
}
export default FooterBee;