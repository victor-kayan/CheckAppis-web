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
              <div
                style={{
                  width: 500,
                  height: 150,
                  //marginTop: 16,
                  borderRadius: 5,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  fontSize: 30
                }}
              >
                Teste
              </div>
            </Col>
            <Col xs={8}>
              <div
                style={{
                  width: 500,
                  height: 150,
                  //marginTop: 16,
                  borderRadius: 5,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  fontSize: 30
                }}
              >
                Teste
              </div>
            </Col>
            <Col xs={8}>
              <div
                style={{
                  width: 500,
                  height: 150,
                  //marginTop: 16,
                  borderRadius: 5,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  fontSize: 30
                }}
              >
                Teste
              </div>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
