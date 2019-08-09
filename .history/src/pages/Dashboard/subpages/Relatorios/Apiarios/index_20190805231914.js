import React, { Component } from "react";
import { Row, Layout, Button, Col, Divider, Radio } from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { uris } from "../../../../../assets";

export class RelatorioApiario extends Component {
  state = {
    orintacaoPapel: "portrait"
  };

  handleDownload = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/apiarios/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios") +
        "&orientacao_papel=" +
        this.state.orintacaoPapel +
        "&acao=download"
    );
  };

  handleVisualizar = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/apiarios/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios") +
        "&orientacao_papel=" +
        this.state.orintacaoPapel +
        "&acao=visualizar"
    );
  };

  onChange = e => {
    this.setState({
      orintacaoPapel: e.target.value
    });
  };

  render() {
    const mapa = [
      {
        key: "",
        name: "Home",
        icon: "home"
      },
      {
        key: "",
        name: "Relatorios",
        icon: "file-search"
      }
    ];

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumbBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <Row gutter={8}>
            <Col span={24}>
              <Divider orientation="left">Orientação do papel</Divider>
              <Radio.Group
                onChange={this.onChange}
                value={this.state.orintacaoPapel}
              >
                <Radio style={radioStyle} value="portrait">
                  Vertical
                </Radio>
                <Radio style={radioStyle} value="landscape">
                  Horizontal
                </Radio>
              </Radio.Group>
            </Col>
          </Row>

          {/* Layout responsiv */}

          <Row type="flex" justify="center">
            <Divider orientation="left">Escolha uma das opções</Divider>
                <Row gutter={8}>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            {/* </Row> */}
          </Row>

          {/* <Row gutter={24}>
            <Col span={24}>

              <div style={{ marginTop: 20 }}>
                  <Col span={2}>
                    <Button
                      type="primary"
                      icon="eye"
                      onClick={this.handleVisualizar}
                    >
                      Visualizar
                    </Button>
                  </Col>
                  <Col span={2}>
                    <Button
                      type="primary"
                      icon="download"
                      onClick={this.handleDownload}
                    >
                      Download
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row> */}
        </div>
      </Layout.Content>
    );
  }
}

export default RelatorioApiario;
