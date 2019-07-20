import React, { Component } from "react";
import { Layout } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import CardBee from "../../../../componentes/CardBee";
import { Grid, Row, Col } from "react-flexbox-grid";

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
          <Grid fluid>
            <Row>
              <Col xs={6} md={3}>
                <div
                  style={{
                    //width: 500,
                    height: 150,
                    borderRadius: 5,
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    fontSize: 30
                  }}
                >
                  Teste
                </div>
              </Col>

              <Col xs={6} md={3}>
                <div
                  style={{
                    //width: 500,
                    height: 150,
                    borderRadius: 5,
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    fontSize: 30
                  }}
                >
                  Teste
                </div>
              </Col>

              <Col xs={6} md={3}>
                <div
                  style={{
                    //width: 500,
                    height: 150,
                    borderRadius: 5,
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    fontSize: 30
                  }}
                >
                  Teste
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout.Content>
    );
  }
}

export default Home;
