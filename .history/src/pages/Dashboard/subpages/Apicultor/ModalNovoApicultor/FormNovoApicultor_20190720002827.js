import React from "react";
import { Form, Input, Icon, Divider, Row, Col, Select } from "antd";

class FormNovoApicultor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cidades: {}
    };

    this.teste = this.teste.bind(this);
  }

  teste = () => {
    this.setState({ cidades: false });
  };

  onChangeSelectEstado = uf => {
    this.props.handleChangeSelectEstado(uf);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const cidades = this.props.list_cidades || [];

    return (
      <div>
        <Divider orientation="left">Dados básicos do apicultor</Divider>

        <Form onSubmit={this.handleSubmit}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Nome do usuário">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe um nome"
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
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
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
                      message: "Por favor informe um E-mail!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Telefone">
                {getFieldDecorator("telefone", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe o telefone!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    onBlur={this.handleConfirmBlur}
                    type="phone"
                    placeholder="Telefone"
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
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
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Senha"
                  />
                )}
              </Form.Item>
            </Col>

            <Col span={8}>
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
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    onBlur={this.handleConfirmBlur}
                    type="password"
                    placeholder="Confirmar senha"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="left">Endereço</Divider>


         
        </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  FormNovoApicultor
);

export default WrappedNormalLoginForm;
