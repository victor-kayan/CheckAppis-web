import React, { Component } from "react";
import { Col, Row, Layout, Form, Input, Icon } from "antd";

import "./styles.css";

class perfil extends Component {
  render() {
    return (
      <Layout.Content style={{ margin: "0 16px" }}>
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
            minHeight: "25vh"
          }}
        >
          <Form style={{ padding: "2vh" }}>
            <Divider orientation="left">Dados básicos do apicultor</Divider>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item label="Nome do usuário">
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "Por favor insira um nome"
                      },
                      {
                        min: 5,
                        message: "O campo tem que ter no minímo 5 caraceteres"
                      },
                      {
                        max: 50,
                        message: "O campo tem que ter no máximo 50 caraceteres"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Nome"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Insira o email do usuário">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "Por favor informe um email válido!"
                      },
                      {
                        required: true,
                        message: "Por favor insira um E-mail!"
                      }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Email"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item label="Insira uma senha">
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Por favor informe um senha!"
                      },
                      {
                        validator: this.validateToNextPassword
                      },
                      {
                        min: 5,
                        message: "O campo tem que ter no minímo 6 caracteres"
                      },
                      {
                        max: 30,
                        message: "O campo tem que ter no minímo 30 caraceteres"
                      }
                    ]
                  })(
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
                  )}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Confirme a senha">
                  {getFieldDecorator("password_confirmation", {
                    rules: [
                      {
                        required: true,
                        message: "Por favor confirme a senha!"
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(
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
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Layout.Content>
    );
  }
}

export default perfil;
