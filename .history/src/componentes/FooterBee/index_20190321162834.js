import React from 'react';
import 'antd/dist/antd.css';
import {
    Layout
} from 'antd';


const FooterBee = () => {
    return (
        <Layout.Footer style={{ width: '100%', position: 'fixed', bottom: '0px' }}>
            <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
        </Layout.Footer>
    )
}

export default FooterBee;
