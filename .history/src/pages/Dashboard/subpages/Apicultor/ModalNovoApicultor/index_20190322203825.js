import React, { Component } from 'react';
import { Modal, Button, Form, Input, Icon, Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveApicultor } from '../../../../../redux/actions/apicultorActions';

class ModalNovoApicultor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
      visible: props.visible,
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
    this.showModal = this.showModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleSave = () => {
    this.setState({ loading: true });
    const { name, email, password, password_confirmation } = this.state;
    // setTimeout(() => {
    //   this.setState({ loading: false, visible: false });
    // }, 3000);
    console.log("Nomeeeeee", name);

    this.props.saveApicultor({ name, email, password, password_confirmation });
  }

  handleSetState = (event) => {
    this.setState({ [event.name]: event.target.value });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.visible });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  // handleSubmit = (e) => {

  //   //const { email, password } = this.state;

  //   e.preventDefault();

  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       //this.setState({ tentouLogar: true });
  //       //this.props.login({ email, password });
  //     }
  //   });
  // };

  render() {

    const { visible, loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { name, email, password, password_confirmation } = this.state;

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
          visible={visible}
          title="Novo usuário"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancelar</Button>,
            <Button key="submit" type="primary" loading={false} onClick={this.handleSave}>
              Salvar
            </Button>,
          ]} >
          <Layout.Content style={{ marginRight: '50px' }}>

            <Form {...formItemLayout} onSubmit={this.handleSubmit} >

              <Form.Item
                label="Nome"
              >
                {getFieldDecorator('userName', {
                  rules: [{
                    required: true, message: 'Por favor insira um nome',
                  }],
                })(
                  <Input name={name} onChange={this.handleSetState}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nome" />
                )}
              </Form.Item>

              <Form.Item
                label="E-mail"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'Por favor informe um email válido!',
                  }, {
                    required: true, message: 'Por favor insira um E-mail!',
                  }],
                })(
                  <Input name={email} onChange={this.handleSetState}
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                )}
              </Form.Item>

              <Form.Item
                label="Senha"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Por favor informe um senha!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input name={email} onChange={this.handleSetState}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Senha" placeholder="Senha" />
                )}
              </Form.Item>

              <Form.Item
                label="Confirmar de senha"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Por favor confirme a senha!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input name={password_confirmation} onChange={this.handleSetState}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
    codeErro: state.apicultorState.codeErro
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveApicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);

