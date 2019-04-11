import React from 'react';
import { Modal, Button, Form, Input, Icon, Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateApicultor } from '../../../../../redux/actions/apicultorActions';
import AlertComponent from '../../../../../componentes/Alert';

class ModalEditApicultor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      visible: false,
      message: '',
      buttonClicou: false,
      typeAlert: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.buttonClicou) {
      if (nextProps.code === 201) {
        this.setState({
          message: 'Usuário criado com sucesso', typeAlert: 'success',
          buttonClicou: false
        });
        this.refs.alert.openAlert();
      } else if (nextProps.code < 200 || nextProps.code >= 300) {
        this.setState({
          message: 'Infelizmente houve algum problema',
          buttonClicou: false, typeAlert: 'error'
        });
        this.refs.alert.openAlert();
      }
    }
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleSubmit = async (e) => {
    const { id } = this.props.idUser;
    alert(this.props.idUser)
    e.preventDefault();
    this.setState({ loadingButton: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ buttonClicou: true });
        this.props.updateApicultor();
      }
    });
  };

  render() {

    const { visible, onClose, onCancel } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message, buttonClicou, typeAlert } = this.state;

    return (
      <div>
        <Modal
          iconType='user'
          visible={visible}
          title="Editar usuário"
          onOk={() => this.setModalVisible(false)}
          onCancel={this.props.onCancel}
          footer={[
            <Button key="back" onClick={onClose}>Cancelar</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleSubmit}>
              Salvar Edição
            </Button>
          ]}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >

          <AlertComponent ref={'alert'} visible={alertVisible} onClose={() => this.setState({ alertVisible: false })}
            clicou={buttonClicou} type={typeAlert} message={message} />

          <h1>{this.props.idUser}</h1>

          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              label="Nome do usuário"
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: 'Por favor insira um nome',
                }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nome" />
              )}
            </Form.Item>

            <Form.Item
              label="Insira o emails do usuário"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'Por favor informe um email válido!',
                }, {
                  required: true, message: 'Por favor insira um E-mail!',
                }],
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
              )}
            </Form.Item>

            <Form.Item
              label="Insira uma senha"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Por favor informe um senha!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Senha" placeholder="Senha" />
              )}
            </Form.Item>

            <Form.Item
              label="Confirme a senha"
            >
              {getFieldDecorator('password_confirmation', {
                rules: [{
                  required: true, message: 'Por favor confirme a senha!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="Confirmação de senha" onBlur={this.handleConfirmBlur} placeholder="Confirmar senha" />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(ModalEditApicultor);

function mapStateToProps(state, props) {
  return {
    list_apicultor: state.apicultorState.list_apicultor,
    loading: state.apicultorState.loading,
    code: state.apicultorState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateApicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);

