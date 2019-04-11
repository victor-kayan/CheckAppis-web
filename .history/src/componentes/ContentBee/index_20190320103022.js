import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import Logo from '../../images/logo.png';
import SidebarBee from '../../componentes/SidebarBee';

import {
    Breadcrumb
} from 'antd';

class ContentBee extends Component {

    render() {

        return (
            <div style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Bill is a cat.
                     </div>
            </div>
        );
    }
}
export default ContentBee;