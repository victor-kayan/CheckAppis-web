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
    alertVisible: false,
    message: '',
    tentouSalvar: false
  }


  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  componentWillReceiveProps(nextProps) {
    //console.log('Valor do retornooo ', nextProps.code)
    if (nextProps.code === 201) {
      //console.log(nextProps.code, " Codigooooo")
      this.setState({ alertVisible: true, message: 'Usuário criado com sucesso' });
      //this.refs.alert.openAlert();
    } else {
      this.setState({
        alertVisible: true, message: 'Infelizmente houve algum problema',
        tentouSalvar: false
      });
     // this.refs.openAlert.openAlert();
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loadingButton: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ tentouSalvar: true });
        this.props.saveApicultor({ name: values.name, email: values.email, password: values.password, password_confirmation: values.password_confirmation });
      }
    });
  };

  render() {
    const { visible, onClose } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message } = this.state;

    //console.log(this.props, ' Props')

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
          //onCancel={() => visible = false}
          footer={[
            <Button key="back" onClick={onClose}>Cancelar</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleSubmit}>
              Salvar
            </Button>,
          ]} >

          <AlertComponent visible={alertVisible} onClose={ () => this.setState( { alertVisible: false })} 
            tentouSalvar={this.state.tentouSalvar} type={'error'} message={message} />

          <Layout.Content style={{ marginRight: '50px' }}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} >

              <Form.Item
                label="Nome"
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
                label="E-mail"
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
                label="Senha"
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
                label="Confirmar de senha"
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

