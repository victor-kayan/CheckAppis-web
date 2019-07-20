import React, { Component } from "react";
import { Col, Row, Layout, Form, Input, Icon, Divider, Button } from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import "./styles.css";

class perfil extends Component {
  render() {
    const mapa = [
      {
        key: "perfil",
        name: "Perfil",
        icon: "user"
      }
    ];

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumbBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360
          }}
        >
          <div className="editarDadosPessoais">
            <img
              src={`${localStorage.getItem("foto")}`}
              className="fotoPerfilEditar"
              alt={"Perfil"}
            />
            <h3 className={"pendenciaEmailTelefone"}>
              {localStorage.getItem("userName")}
            </h3>
          </div>

          <div
            style={{
              padding: 24,
              margin: 10,
              background: "#fff",
              minHeight: 360
            }}
          >
            <Form style={{ padding: "2vh" }}>
              <Divider orientation="left">Dados básicos do apicultor</Divider>
            
            <div className='formStyle'>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item label="Nome do usuário">
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Nome"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Insira o email do usuário">
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Email"
                    />
                  </Form.Item>
                </Col>
              </Row>
              </div>

              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item label="Insira uma senha">
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Senha"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Confirme a senha">
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      onBlur={this.handleConfirmBlur}
                      type="password"
                      placeholder="Confirmar senha"
                    />
                  </Form.Item>
                </Col>

                <div className="buttonsAction">
                  <Button
                    key="submit"
                    type="primary"
                    loading={this.props.loading}
                    onClick={this.handleSubmit}
                  >
                    Salvar alterações
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </div>
      </Layout.Content>
    );
  }
}

export default perfil;
