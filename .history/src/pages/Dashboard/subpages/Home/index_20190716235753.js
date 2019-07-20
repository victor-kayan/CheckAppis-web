import React, { Component } from "react";
import { Col, Row, Layout } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import CardBee from "../../../../componentes/CardBee";
import apiario from "../../../../images/bee-hive.png";
import colmeia from "../../../../images/honeycomb.png";
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
          <Row type="flex">
            <Col span={6} order={4}>
            <dvi style={{backgroundCoolor: 'red'}}></dvi>
              1 col-order-4
            </Col>
            <Col span={6} order={3}>
              2 col-order-3
            </Col>
            <Col span={6} order={2}>
              3 col-order-2
            </Col>
            <Col span={6} order={1}>
              4 col-order-1
            </Col>
          </Row>
          ,
          <Row gutter={24}>
            <Col span={8}>
              <CardBee
                urlIcon={apiario}
                title="Quantidade de apiários"
                description="20 Apiários"
                loading={false}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon={colmeia}
                title="Quantidade de colmeias"
                description="150 Colmeias"
                loading={false}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon={apicultor}
                title="Quantidade de apicultores"
                description="4 Apicultores"
                loading={false}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Layout.Content style={{ marginTop: 20 }}>
              <div
                style={{
                  padding: 24,
                  margin: 10,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  minHeight: 360
                }}
              />
            </Layout.Content>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
