import React, { Component } from "react";
import { Col, Row, Layout, Card } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import CardBee from "../../../../componentes/CardBee";

class Home extends Component {
  render() {
    const mapa = [
      {
        key: "1",
        name: "Home",
        icon: "home"
      }
    ];

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360
          }}
        >
          <Row between="xs">
            <Col xs={8}>
              <Card
                size="small"
                title="Small size card"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col xs={8}>
              <Card
                size="small"
                title="Small size card"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col xs={8}>
              {" "}
              <Card
                size="small"
                title="Small size card"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
