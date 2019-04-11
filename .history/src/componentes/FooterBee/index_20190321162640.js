import React from 'react';
import 'antd/dist/antd.css';
import {
    Layout
} from 'antd';


const FooterBee = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Layout.Footer style={{  position: 'relative', bottom: '0px' }}>
                <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
            </Layout.Footer>
        </div>
    )
}

export default FooterBee;
