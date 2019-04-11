import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class ModalNovoApicultor extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {

    const { visible, loading } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>

        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >

          <Form className="login-form" >
            <Form.Item>
              <img className="logo" src={Logo} alt="Logo" />
              <Title level={2}>Bee<span style={{ color: '#FFD915' }}>Check</span></Title>
            </Form.Item>

            <AlertComponent ref={'alert'} visible={error} type={'error'} message={message} />

            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'Informe um formato de email válido!',
                }, {
                  required: true, message: 'Por favor informe seu email!',

                }],
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name={email} onChange={this.setEmail} />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  min: 5, message: 'Sua senha tem que ter no minixo 5 caracteres',
                }, {
                  required: true, message: 'Por favor informe sua senha!',
                }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" name={password} placeholder="Senha" onChange={this.setPassword} />
              )}
            </Form.Item>

            <Form.Item>
              <Row className="">
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox style={{ float: 'left' }}>Lembrar-me</Checkbox>
                )}
                <a style={{ float: 'right' }} className="login-form-forgot" onClick={this.esqueciSenha}>Recuperar senha</a>
              </Row>
              <Row className="button">
                <Button type="primary" onClick={this.handleSubmit} type="primary" loading={this.props.loading} className="login-form-button button">
                  Entrar
                                 </Button>
              </Row>
              <strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong> - Gerencie já seu apiário</strong>
            </Form.Item>
          </Form>


        </Modal>
      </div>
    );
  }
}

export default ModalNovoApicultor;