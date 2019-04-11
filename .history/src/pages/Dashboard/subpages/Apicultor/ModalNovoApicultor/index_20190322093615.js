import React, { Component } from 'react';
import { Modal, Button, Form, Input, Icon, Row, Checkbox } from 'antd';

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
    //const { getFieldDecorator } = this.props.form;

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


          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
              label="E-mail"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="Password"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" />
              )}
            </Form.Item>
            <Form.Item
              label="Confirm Password"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </Form.Item>
        
        </Modal>
      </div>
        );
      }
    }
    
//const WrappedNormalLoginForm = Form.create({name: 'normal_login' }) (ModalNovoApicultor);
        
export default ModalNovoApicultor;