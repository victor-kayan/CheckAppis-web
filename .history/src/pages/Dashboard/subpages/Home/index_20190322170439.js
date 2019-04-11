import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon } from 'antd';
import BreadcrumBee from '../../../../componentes/BreadcrumBee';

class Home extends Component {

    render() {

        const { Meta } = Card;

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
                    <div style={{ padding: '30px' }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card style={{ background: '#ECECEC' }} title="Apiario PDF" actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} bordered={false}>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card style={{ background: '#ECECEC' }} title="Apiario São Miguel" bordered={false}>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                    <p>Apiario 2</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card style={{ background: '#ECECEC' }} title="Apiario Portalegre" bordered={false}>Apiario 3</Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout.Content>
        );
    }
}

export default Home;


