import React, { Component } from "react";
import { Card, Col, Avatar, Row, Layout, Icon } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";

const { Meta } = Card;

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
                    size="large"
                    src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                  />
                </div>
              }
              title="Colmeias"
              description="33"
            />
          </Card>
          <Card
            style={{
              width: 500,
              height: 150,
              marginTop: 16,
              borderRadius: 5,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              fontSize: 40
            }}
            loading={false}
          >
            <Meta
              avatar={
                <div
                  style={{
                    padding: 15,
                    backgroundColor: "#fdeaab",
                    borderRadius: 70
                  }}
                >
                  <Avatar
                    size="large"
                    src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                  />
                </div>
              }
              title="Colmeias"
              description="33"
            />
          </Card>
        </Row>
      </Layout.Content>
    );
  }
}

export default Home;
