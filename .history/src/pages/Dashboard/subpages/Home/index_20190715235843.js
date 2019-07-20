import React, { Component } from 'react';
import { Card, Col, Row, Layout,Icon, Avatar } from 'antd';
import BreadcrumBee from '../../../../componentes/BreadcrumBee';

const { Meta } = Card;
class Home extends Component {

    render() {

        const mapa = [{
            key: '1',
            name: 'Home',
            icon: 'home',
        },];

        return (
            <Layout.Content style={{ margin: '0 16px' }}>

                <BreadcrumBee mapa={mapa} />

                <div style={{ padding: 24, margin: 10, background: '#fff', minHeight: 360 }}>
                        <Row gutter={16}>
                            <Col span={8}>         
                                <Card
                                    style={{
                                    width: 500,
                                    height: 150,
                                    marginTop: 16,
                                    borderRadius: 5,
                                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                                    fontSize: 30
                                    }}
                                    loading={false}
                                >
                                    <Meta
                                    avatar={
                                        <div
                                        style={{
                                            padding: 15,
                                            backgroundColor: "#fdeaab",
                                            borderRadius: 50
                                        }}
                                        >
                                        <Avatar
                                            size={70}
                                            src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                                        />
                                        </div>
                                    }
                                    title="Colmeias"
                                    description="33"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                            <Card
                                    style={{
                                    width: 500,
                                    height: 150,
                                    marginTop: 16,
                                    borderRadius: 5,
                                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                                    fontSize: 30
                                    }}
                                    loading={false}
                                >
                                    <Meta
                                    avatar={
                                        <div
                                        style={{
                                            padding: 15,
                                            backgroundColor: "#fdeaab",
                                            borderRadius: 50
                                        }}
                                        >
                                        <Avatar
                                            size={70}
                                            src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                                        />
                                        </div>
                                    }
                                    title="Colmeias"
                                    description="33"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                            <Card
                                    style={{
                                        color: red,
                                    width: 500,
                                    height: 150,
                                    marginTop: 16,
                                    borderRadius: 5,
                                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                                    fontSize: 30,
                                    }}
                                    loading={false}
                                >
                                    <Meta
                                    avatar={
                                        <div
                                        style={{
                                            padding: 15,
                                            backgroundColor: "#fdeaab",
                                            borderRadius: 50
                                        }}
                                        >
                                        <Avatar
                                            size={70}
                                            src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                                        />
                                        </div>
                                    }
                                    title="Colmeias"
                                    description="33"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
            </Layout.Content>
        );
    }
}

export default Home;


