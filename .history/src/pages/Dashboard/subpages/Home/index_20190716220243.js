import React, { Component } from "react";
import { Col, Row, Layout } from "antd";
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

        <Row>
          <div
            style={{
              padding: 24,
              margin: 10,
              background: "#fff",
              minHeight: 360
            }}
          >
            <Row gutter={24}>
              <Row>
                <Col xs={6} sm={3} md={2} lg={4} >Teste</Col>
                <Col xs={6} sm={3} md={2} lg={4} >Teste</Col>
                <Col xs={6} sm={3} md={2} lg={4} >Teste</Col>
              </Row>
              >
            </Row>
          </div>
        </Row>
      </Layout.Content>
    );
  }
}

export default Home;
