import React from "react";
import { Form, Input, Icon, Divider, Row, Col, Select } from "antd";

class FormApiario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const { apicultores, apiario } = this.props || [];

    return (
      <div>
        <Divider orientation="left">Dados básicos do apiário</Divider>

        <Form onSubmit={this.handleSubmit}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Nome do apiário">
                {getFieldDecorator("nome", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe um nome para o apiário"
                    },
                    {
                      min: 5,
                      message: "O campo tem que ter no minímo 5 caracteres"
                    },
                    {
                      max: 50,
                      message: "O campo tem que ter no máximo 50 caracteres"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Nome"
                  />
                )}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Descrição">
                {getFieldDecorator("descricao", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe uma descrição!"
                    },
                    {
                      min: 5,
                      message: "Por favor informe uma descrição!"
                    },
                    {
                      max: 100,
                      message: "O campo tem que ter no máximo 100 caracteres"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Descrição"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Selecione o apicultor responsável">
                {getFieldDecorator("apicultor_id", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor selecione o apicultor!"
                    }
                  ]
                })(
                  <Select
                    showSearch
                    placeholder="Selecione a cidade"
                    optionFilterProp="children"
                    //onChange={this.onc}
                    onFocus={this.props.onFocus}
                    onSearch={this.props.onSearch}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {apicultores &&
                      apicultores.data &&
                      apicultores.data.map(apicultor => (
                        <Option key={apicultor.id} value={apicultor.id}>
                          {apicultor.name}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Endereço">
                {getFieldDecorator("logradouro", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe o endereço!"
                    },
                    {
                      min: 5,
                      message: "O campo tem que ter no minimo 5 caracteres!"
                    },
                    {
                      max: 100,
                      message: "O campo tem que ter no máximo 100 caracteres"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="environment"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Endereço"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  FormApiario
);

export default WrappedNormalLoginForm;
