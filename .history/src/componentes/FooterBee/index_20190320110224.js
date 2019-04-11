import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout} from 'antd';


class FooterBee extends Component {
    render() {
        return (
            <Layout.Footer style={{ textAlign: 'center' }}>
                <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
            </Layout.Footer>
        );
    }
}
export default FooterBee;