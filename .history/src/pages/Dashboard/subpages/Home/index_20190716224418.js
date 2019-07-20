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
          <Row gutter={24}>
            <Col span={8}>
              <CardBee urlIcon="https://image.flaticon.com/icons/svg/124/124341.svg" title="Quantidade de apiários" description="20 Apiários"/>
            </Col>
            <Col span={8}>
              <CardBee urlIcon="" title="Quantidade de colmeias" description="Colmeias"/>
            </Col>
            <Col span={8}>
              <CardBee urlIcon="" title="Quantidade de colmeias" description="Colmeias" />
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
