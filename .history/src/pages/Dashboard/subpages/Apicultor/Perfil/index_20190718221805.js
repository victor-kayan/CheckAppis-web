import React, { Component } from "react";
import {
  Col,
  Row,
  Layout,
  Form,
  Input,
  Icon,
  Divider,
  Button,
  Upload,
  message
} from "antd";
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

    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

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
          <div style={{ borderRadius: 10, borderColor: "#C0C" }}>
            <div className="editarDadosPessoais">
              <img
                src={`${localStorage.getItem("foto")}`}
                className="fotoPerfilEditar"
                alt={"Perfil"}
              />
              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> Selecionar
                </Button>
              </Upload>
              <h3 className={"pendenciaEmailTelefone"}>
                {localStorage.getItem("userName")}
              </h3>
            </div>

            <div
              style={{
                padding: 24,
                margin: 10,
                background: "#fff",
                minHeight: 360,
                borderColor: "#000",
                borderWidth: 1
              }}
            >
              <Form style={{ padding: "2vh" }}>
                <Divider orientation="left">Dados básicos do apicultor</Divider>

                <div className="formStyle">
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
        </div>
      </Layout.Content>
    );
  }
}

export default perfil;
