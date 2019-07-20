import React, { Component } from "react";
import { Col, Row, Layout, Icon, Avatar } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import CardBee from "../../../../componentes/Card";

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
          <Row gutter={16}>
            <Col span={8}>
              <Card urlIcon={""} title={"33"} description={"Colmeia"} />
            </Col>
            <Col span={8}>
              <Card urlIcon={""} title={"33"} description={"Colmeia"} />
            </Col>
            <Col span={8}>
              <Card urlIcon={""} title={"33"} description={"Colmeia"} />
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
