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
            <Row gutter={12}>
              <Col xs={12} sm={6} md={6} lg={6}>
                <CardBee
                  urlIcon="https://image.flaticon.com/icons/svg/263/263929.svg"
                  title={"33"}
                  description="Colmeia"
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <CardBee urlIcon={""} title={"33"} description="Colmeia" />
              </Col>
            </Row>
          </div>
        </Row>
      </Layout.Content>
    );
  }
}

export default Home;
