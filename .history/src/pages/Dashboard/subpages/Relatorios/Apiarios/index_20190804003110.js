import React, { Component } from "react";
import {
  Row,
  Layout,
  Checkbox,
  Radio,
  Button,
  Input,
  Col,
  Divider
} from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { uris } from "../../../../../assets";

export class RelatorioApiario extends Component {
  state = {
    disabled: true,
    value: 1
  };

  componentWillReceiveProps = () => {
    window.open(
      uris.BASE_URL +
        "tecnico/apiarios/relatorios?token_relatorio=" +
        localStorage.getItem("token_relatorios")
    );
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
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

    const options = [
      { label: "Visitas nos apiário", value: "apiario" },
      { label: "Visitas nas colmeias", value: "colmeia" }
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
              <Divider orientation="left">
                Escolha uma das opções 
              </Divider>

              <div style={{ marginTop: 20 }}>
                <Row gutter={4}>
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
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

export default RelatorioApiario;
