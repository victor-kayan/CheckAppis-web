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
  Spin
} from "antd";
import BreadcrumbBee from "../../../../../componentes/BreadcrumBee";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPerfil } from "../../../../../redux/actions/tecnicoActions";
import "./styles.css";

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPerfil: {}
    };
  }

  componentDidMount = () => {
    this.props.getPerfil();
  };

  handleSubmit = () => {
    this.validateFields((err, values) => {
      if (!err) {
        if (this.props.edicao) {
          this.setState({ clicouButtonSave: true });
          this.props.updateApicultor({
            id: this.props.apicultor.id,
            request: values
          });
        } else {
          this.setState({ clicouButtonSave: true });
          this.props.saveApicultor({
            name: values.name,
            email: values.email,
            telefone: values.telefone,
            cidade_id: values.cidade_id,
            logradouro: values.logradouro,
            password: values.password,
            password_confirmation: values.password_confirmation
          });
        }
      }
    });
  };

  render() {
    const mapa = [
      {
        key: "/",
        name: "Home",
        icon: "home"
      },
      {
        key: "perfil",
        name: "Perfil",
        icon: "user"
      }
    ];

    const { getFieldDecorator } = this.props.form;
    const { loadingPerfil, userPerfil } = this.props || null;

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
          <Row>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
            >
              {loadingPerfil ? (
                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 150
                  }}
                >
                  <Spin size="large" />
                </div>
              ) : (
                <Col span={15}>
                  <div style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}>
                    <div className="editarDadosPessoais">
                      <img
                        src={userPerfil.foto}
                        className="fotoPerfilEditar"
                        alt={"Perfil"}
                      />

                      <h3 className={"pendenciaEmailTelefone"} />
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
                        <Divider orientation="left">
                          Dados básicos do apicultor
                        </Divider>

                        <div className="formStyle">
                          <Row gutter={24}>
                            <Col span={12}>
                              <Form.Item label="Nome">
                                {getFieldDecorator("name", {
                                  initialValue: userPerfil.name || "",
                                  rules: [
                                    {
                                      required: true,
                                      message: "Por favor informe um nome!"
                                    },
                                    {
                                      validator: this.compareToFirstPassword
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
                                    onBlur={this.handleConfirmBlur}
                                    type="text"
                                    placeholder="Endereço"
                                  />
                                )}
                              </Form.Item>
                            </Col>

                            <Col span={12}>
                              <Form.Item label="Email">
                                {getFieldDecorator("email", {
                                  initialValue: userPerfil.email || "",
                                  rules: [
                                    {
                                      required: true,
                                      message: "Por favor informe seu email!"
                                    },
                                    {
                                      validator: this.compareToFirstPassword
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
                                    onBlur={this.handleConfirmBlur}
                                    type="text"
                                    placeholder="Endereço"
                                  />
                                )}
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>

                        <Row gutter={8}>
                          <Col span={12}>
                            <Form.Item label="Insira uma senha">
                              {getFieldDecorator("password", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Por favor informe uma senha!"
                                  },
                                  {
                                    min: 5,
                                    message:
                                      "A senha tem que ter no minímo 5 caracteres!"
                                  },
                                  {
                                    max: 20,
                                    message:
                                      "A senha tem que ter no máximo 20 caracteres!"
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
                                  type="password"
                                  placeholder="Senha"
                                />
                              )}
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
                </Col>
              )}
            </div>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Perfil);

function mapStateToProps(state, props) {
  return {
    userPerfil: state.tecnicoState.userPerfil,
    loadingPerfil: state.tecnicoState.loadingPerfil
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPerfil }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
