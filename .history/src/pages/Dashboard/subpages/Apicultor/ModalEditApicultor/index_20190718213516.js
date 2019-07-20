import React from "react";
import { Modal, Button, Form, Input, Icon, notification } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateApicultor,
  getApicultor
} from "../../../../../redux/actions/apicultorActions";
import AlertComponent from "../../../../../componentes/Alert";

class ModalEditApicultor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      visible: false,
      message: "",
      buttonClicou: false,
      typeAlert: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    const { idUser } = this.props;

    this.props.getApicultor(idUser);
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  componentWillReceiveProps(nextProps) {
    console.log("Editar", nextProps);
    if (this.state.buttonClicou) {
      if (nextProps.code === 200) {
        this.setState({
          message: "Apicultor editado com sucesso",
          typeAlert: "success"
        });
        notification.open({
          message: "Edição realizada com sucesso",
          description: nextProps.message,
          icon: <Icon type="smile" style={{ color: "#108ee9" }} />
        });
        this.props.onCancel();
      } else if (nextProps.code < 200 || nextProps.code >= 300) {
        this.setState({
          message: nextProps.message,
          typeAlert: "error"
        });
        this.refs.alert.openAlert();
      }
      this.setState({ buttonClicou: false });
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
        this.props.updateApicultor({
          id: this.props.apicultor.id,
          request: values
        });
      }
    });
  };

  render() {
    const { visible, onClose, apicultor } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message, buttonClicou, typeAlert } = this.state;

    return (
      <div>
        <Modal
          iconType="user"
          visible={visible}
          title="Editar usuário"
          onOk={() => this.setModalVisible(false)}
          onCancel={this.props.onCancel}
          destroyOnClose
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
              Salvar Edição
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

          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="Nome do usuário">
              {getFieldDecorator("name", {
                initialValue: apicultor.name || [],
                rules: [
                  {
                    required: true,
                    message: "Por favor insira um nome"
                  },
                  {
                    max: 50,
                    message: "O nome tem que ter no máximo 50 caraceteres"
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

            <Form.Item label="Insira o email do usuário">
              {getFieldDecorator("email", {
                initialValue: apicultor.email || [],
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
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>

            <Form.Item label="Insira uma senha">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Por favor informe uma senha!"
                  },
                  {
                    validator: this.validateToNextPassword
                  },
                  {
                    min: 6,
                    message: "A senha tem que ter no minimo 6"
                  },
                  {
                    max: 6,
                    message: "A senha tem que ter no máximo 30"
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
          </Form>
        </Modal>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  ModalEditApicultor
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
  return bindActionCreators({ updateApicultor, getApicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);
