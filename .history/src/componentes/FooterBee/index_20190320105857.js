import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {
    Footer
} from 'antd';

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