import React, { Component } from "react";
import { Col, Row, Layout } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import CardBee from "../../../../componentes/CardBee";
import apiario from "../../../../images/bee-hive.png";
import colemeia from "../../../../images/honeycomb.png";
import apicultor from "../../../../images/apiarist.png";

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
              <CardBee
                urlIcon={apiary}
                title="Quantidade de apiários"
                description="20 Apiários"
                loading={false}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon="https://image.flaticon.com/icons/svg/1447/1447875.svg"
                title="Quantidade de colmeias"
                description="Colmeias"
                loading={false}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon="https://image.flaticon.com/icons/svg/1447/1447875.svg"
                title="Quantidade de apicultores"
                description="Colmeias"
                loading={false}
              />
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
