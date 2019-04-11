import React from 'react';
import 'antd/dist/antd.css';
import {
    Layout
} from 'antd';

position:absolute;
    bottom:0;
    width:100%;

const FooterBee = () => {
    return (
        <Layout.Footer style={{ textAlign: 'center', position: 'relative', bottom: '0px' }}>
            <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
        </Layout.Footer>
    )
}

export default FooterBee;
