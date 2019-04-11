import React from 'react';
import 'antd/dist/antd.css';
import {
    Layout
} from 'antd';


const FooterBee = () => {
    return (
        <Layout.Footer style={{ position: 'initial', textAlign: 'center', width: '80%', bottom: '0px' }}>
            <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
        </Layout.Footer>
    )
}

export default FooterBee;