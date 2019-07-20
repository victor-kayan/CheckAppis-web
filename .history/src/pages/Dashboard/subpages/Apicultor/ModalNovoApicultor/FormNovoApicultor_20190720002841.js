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



         
        </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  FormNovoApicultor
);

export default WrappedNormalLoginForm;
