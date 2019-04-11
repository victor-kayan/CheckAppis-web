import React from 'react';
import 'antd/dist/antd.css';
import {
    Layout
} from 'antd';


const FooterBee = () => {
    return (
        <div style={{ width: '100vw' }}>
            <Layout.Footer style={{ position: 'fixed', bottom: '0px' }}>
                <div style={{ textAlign: 'center' }}>
                    <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong>
                </div>
            </Layout.Footer>
        </div>
    )
}

export default FooterBee;
