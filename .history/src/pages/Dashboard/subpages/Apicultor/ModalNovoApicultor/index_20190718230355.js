import React from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Icon,
  notification,
  Divider,
  Row,
  Col,
  Select
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveApicultor } from "../../../../../redux/actions/apicultorActions";
import AlertComponent from "../../../../../componentes/Alert";

class ModalNovoApicultor extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    visible: false,
    message: "",
    buttonClicou: false,
    typeAlert: ""
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.buttonClicou) {
      if (nextProps.code === 201) {
        this.setState({
          message: "Apicultor cadastrado com sucesso",
          typeAlert: "success",
          buttonClicou: false
        });
        notification.open({
          message: "Cadastro efetuado com sucesso",
          description: nextProps.message,
          icon: <Icon type="smile" style={{ color: "#108ee9" }} />
        });
        this.props.onCancel();
      } else if (nextProps.code < 200 || nextProps.code >= 300) {
        this.setState({
          message: nextProps.message,
          buttonClicou: false,
          typeAlert: "error"
        });
        this.refs.alert.openAlert();
      }
    }
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loadingButton: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ buttonClicou: true });
        this.props.saveApicultor({
          name: values.name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation
        });
      }
    });
  };

  onChange(value) {
    console.log(`selected ${value}`);
  }

  onBlur() {
    console.log("blur");
  }

  onFocus() {
    console.log("focus");
  }

  onSearch(val) {
    console.log("search:", val);
  }

  render() {
    const { visible, onClose } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message, buttonClicou, typeAlert } = this.state;
    const { Option } = Select;

    return (
      <div>
        <Modal
          iconType="user"
          visible={visible}
          title="Novo apicultor"
          onOk={() => this.setModalVisible(false)}
          onCancel={this.props.onCancel}
          destroyOnClose
          width={700}
          footer={[
            <Button key="back" onClick={onClose}>
              Cancelar
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.props.loading}
              onClick={this.handleSubmit}
            >
              Salvar
            </Button>
          ]}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >
          <AlertComponent
            ref={"alert"}
            visible={alertVisible}
            onClose={() => this.setState({ alertVisible: false })}
            clicou={buttonClicou}
            type={typeAlert}
            message={message}
          />

          <Divider orientation="left">Dados básicos do apicultor</Divider>

          <Form onSubmit={this.handleSubmit}>
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

            <Divider orientation="left">Endereço</Divider>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item label="Estado">
                  <Select
                  icon={''}
                    showSearch
                    placeholder="Selecione estado"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
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
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
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
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  ModalNovoApicultor
);

function mapStateToProps(state, props) {
  return {
    list_apicultor: state.apicultorState.list_apicultor,
    loading: state.apicultorState.loading,
    code: state.apicultorState.code,
    message: state.apicultorState.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveApicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);
