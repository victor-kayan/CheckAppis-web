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
    this.refs.formNovoApicultor.validateFields((err, values) => {
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
    });
  };

  onChange(value) {
    console.log(this.props);
    //alert('Hello')
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

  open = () => {
    this.refs.openModal.open();
  };

  render() {
    const { visible, onClose } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message, buttonClicou, typeAlert } = this.state;
    const { Option } = Select;

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
        <FormaNovoApicultor ref="formNovoApicultor" onChange={this.onChange}  />;
      </Modal>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  ModalNovoApicultor
);

function mapStateToProps(state, props) {
  return {
    lis_cidades: state.cidadeState.list_cidades,
    list_apicultor: state.apicultorState.list_apicultor,
    loading: state.apicultorState.loading,
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
