import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import colors from '../../assets/colors'

const { Footer } = Layout;


const FooterBee = () => {
    return (
        <Footer style={{ textAlign: 'center' }}><strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong>  ©2019 copyright</strong></Footer>
    )
}

export default FooterBee;
