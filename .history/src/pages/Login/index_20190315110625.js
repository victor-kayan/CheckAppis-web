import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                
             
            </Form>
        );
    }
}


export default Login;
