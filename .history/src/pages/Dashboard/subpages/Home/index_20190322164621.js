import React, { Component } from 'react';
import { Card, Layout } from 'antd';
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
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>Card content</Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>Card content</Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>Card content</Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout.Content>
        );
    }
}

export default Home;


