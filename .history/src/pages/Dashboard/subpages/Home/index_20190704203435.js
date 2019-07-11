import React, { Component } from 'react';
import { Card, Col, Row, Layout,Icon } from 'antd';
import BreadcrumBee from '../../../../componentes/BreadcrumBee';

class Home extends Component {

    render() {

        const mapa = [{
            key: '1',
            name: 'Home',
            icon: 'home',
        },];

        const gridStyle = {
            width: '25%',
            textAlign: 'center',
        };

        return (
            <Layout.Content style={{ margin: '0 16px' }}>

                <BreadcrumBee mapa={mapa} />

                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Apiario PDF" actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} bordered={false}>Apiario 1</Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Apiario São Miguel" bordered={false}>Apiario 2</Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Apiario Portalegre" bordered={false}>Apiario 3</Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout.Content>
        );
    }
}

export default Home;


