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
            
          </div>
      </Layout.Content>
    );
  }
}

export default Home;
