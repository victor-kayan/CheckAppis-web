import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {
    Breadcrumb
} from 'antd';

class ContentBee extends Component {

    render() {

        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Bill is a cat.
                     </div>
            </Content>
        );
    }
}
export default ContentBee;