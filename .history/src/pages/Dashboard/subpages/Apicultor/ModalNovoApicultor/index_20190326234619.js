import React from 'react';
import { Modal, Button, Form, Input, Icon, Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveApicultor } from '../../../../../redux/actions/apicultorActions';
import AlertComponent from '../../../../../componentes/Alert';

class ModalNovoApicultor extends React.Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    visible: false,
    message: '',
    buttonClicou: false,
    typeAlert: ''
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
    e.preventDefault();
    this.setState({ loadingButton: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ buttonClicou: true });
        this.props.saveApicultor({ name: values.name, email: values.email, password: values.password, password_confirmation: values.password_confirmation });
      }
    });
  };

  render() {
    const { visible, onClose, onCancel } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message, buttonClicou, typeAlert } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <div>
        <Modal
          icon={<Icon type="question-circle"></Icon>}
          visible={visible}
          title="Novo usuário"
          onOk={() => this.setModalVisible(false)}
          onCancel={this.props.onCancel}
          footer={[
            <Button key="back" onClick={onClose}>Cancelar</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleSubmit}>
              Salvar
            </Button>,
          ]} >

          <AlertComponent ref={'alert'} visible={alertVisible} onClose={() => this.setState({ alertVisible: false })}
            clicou={buttonClicou} type={typeAlert} message={message} />

          <Layout.Content >
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <label>label</label>
              <Form.Item style={{ wid: '10%'}}
              
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: 'Por favor insira um nome',
                  }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nome" />
                )}
              </Form.Item>

              <label>label</label>
              <Form.Item
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
              <label>label</label>
              <Form.Item
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
              >
                {getFieldDecorator('password_confirmation', {
                  rules: [{
                    required: true, message: 'Por favor confirme a senha!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input style={{ width: "100%" }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="Confirmação de senha" onBlur={this.handleConfirmBlur} placeholder="Confirmar senha" />
                )}
              </Form.Item>

            </Form>
          </Layout.Content>
        </Modal>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(ModalNovoApicultor);

function mapStateToProps(state, props) {
  return {
    list_apicultor: state.apicultorState.list_apicultor,
    loading: state.apicultorState.loading,
    code: state.apicultorState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveApicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);

