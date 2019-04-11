import React, { Component } from 'react';
import { Card, Layout } from 'antd';

class Home extends Component {

    render() {

        const { Meta } = Card;

        return (
            <Layout.Content style={{ margin: '0 16px' }}>

                <BreadcrumBee mapa={null} />

                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                        />
                    </Card>
                </div>
            </Layout.Content>
        );
    }
}

export default Home;


