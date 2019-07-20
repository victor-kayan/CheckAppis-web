import React from "react";
import { Form, Input, Icon, Divider, Row, Col, Select } from "antd";

class FormaNovoApicultor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      endereco: '',
      cidade: '',
      estado: '',
      selected: true,
      cidades: null
    };

    this.handleCancel = this.handleCancel.bind(this);
  }

  
  handleCancel = () => {
    this.setState({ visible: false });
  }

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

          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Estado">
                <Select
                  showSearch
                  placeholder="Selecione estado"
                  optionFilterProp="children"
                  onChange={this.props.onChange}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                  onSearch={this.props.onSearch}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="AC">Acre</Option>
                  <Option value="AL">Alagoas</Option>
                  <Option value="AP">Amapá</Option>
                  <Option value="AM">Amazonas</Option>
                  <Option value="BA">Bahia</Option>
                  <Option value="CE">Ceará</Option>
                  <Option value="DF">Distrito Federal</Option>
                  <Option value="ES">Espírito Santo</Option>
                  <Option value="GO">Goiás</Option>
                  <Option value="MA">Maranhão</Option>
                  <Option value="MT">Mato Grosso</Option>
                  <Option value="MS">Mato Grosso do Sul</Option>
                  <Option value="MG">Minas Gerais</Option>
                  <Option value="PA">Pará</Option>
                  <Option value="PB">Paraíba</Option>
                  <Option value="PR">Paraná</Option>
                  <Option value="PE">Pernambuco</Option>
                  <Option value="PI">Piauí</Option>
                  <Option value="RJ">Rio de Janeiro</Option>
                  <Option value="RN">Rio Grande do Norte</Option>
                  <Option value="RS">Rio Grande do Sul</Option>
                  <Option value="RO">Rondônia</Option>
                  <Option value="RR">Roraima</Option>
                  <Option value="SC">Santa Catarina</Option>
                  <Option value="SP">São Paulo</Option>
                  <Option value="SE">Sergipe</Option>
                  <Option value="TO">Tocantins</Option>
                  <Option value="EX">Estrangeiro</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Cidade">
                <Select
                  showSearch
                  placeholder="Selecione a cidade"
                  optionFilterProp="children"
                  //onChange={this.props.}
                  onFocus={this.props.onFocus}
                  onSearch={this.props.onSearch}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {cidades.map(cidade => (
                    <Option key={cidade.id} value={cidade.id}>
                      {cidade.nome}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Endereço">
                {getFieldDecorator("logradouro", {
                  rules: [
                    {
                      required: true,
                      message: "Por favor informe um endereço!"
                    },
                    {
                      validator: this.compareToFirstPassword
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
                    onBlur={this.handleConfirmBlur}
                    type="text"
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
  FormaNovoApicultor
);

export default WrappedNormalLoginForm;
