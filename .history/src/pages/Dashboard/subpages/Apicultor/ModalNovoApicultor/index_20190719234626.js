import React from "react";
import { Modal, Button, Form, Icon, notification, Select } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveApicultor } from "../../../../../redux/actions/apicultorActions";
import { getCidadesByUf } from "../../../../../redux/actions/cidadeActions";
import AlertComponent from "../../../../../componentes/Alert";
import FormaNovoApicultor from "./FormNovoApicultor";

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

  componentDidMount = () => {
    this.props.getCidadesByUf("AC");
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

  handleSubmit = () => {
    this.setState({ loadingButton: true });
    this.refs.formNovoApicultor.validateFields((err, values) => {
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

  onChange = (value) => {
    this.props.getCidadesByUf(value);
    this.onChangeSelectCidade(value);
  };

  onChangeSelectCidade = (value) => {
    this.props.getCidadesByUf(value);
  };

  onChangeSelectCidade

  
  componentWillReceiveProps = nextProps => {

  };

  onBlur() {
    console.log("blur");
  }

  onFocus() {
    console.log("focus");
  }

  onSearch(val) {
    console.log("search:", val);
  }

  open = () => {
    this.refs.openModal.open();
  };

  render() {
    const { visible, onClose } = this.props;
    const { alertVisible, message, buttonClicou, typeAlert } = this.state;
    console.log("Cidades: ", this.props.list_cidades || []);

    return (
      <Modal
        ref="openModal"
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
        <FormaNovoApicultor
          ref="formNovoApicultor"
          onChange={this.onChange}
          list_cidades={this.props.list_cidades}
        />
        ;
      </Modal>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  ModalNovoApicultor
);

function mapStateToProps(state, props) {
  return {
    list_cidades: state.cidadeState.list_cidades,
    loading: state.apicultorState.loading,
    loadingCidade: state.apicultorState.loadingCidade,
    code: state.apicultorState.code,
    message: state.apicultorState.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveApicultor, getCidadesByUf }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(WrappedRegistrationForm);
