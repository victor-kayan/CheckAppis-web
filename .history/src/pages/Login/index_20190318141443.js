import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col
} from 'antd';
import '../../pages/Login/styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/loginActions';
import Api from '../../services/api';
import { uris } from '../../assets';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            message: "",
            connect: false,
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);

    }

    setEmail  = (event) => {
        alert('Aquo')
        this.setState({ email: event.target.value });
    }

    setPassword = (event) => {
        this.setState({ password: event.target.value });
        alert(this.state.email)
    }

    verifyCredentials = () => {
        alert(this.state.email);
        //const {email , password} = this.state;
        //await login({ email, password });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { email, password } = this.state;

        return (

            <div className="container">
                <div className="box">
                    <Form className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Por favor informe seu email!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" value={email} onChange={this.setEmail}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Por favor favro informe sua senha!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" value={password} onChange={this.setPassword} placeholder="Senha" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                                Log in
                             </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );

    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

function mapStateToProps(state, props) {
    return {
        loading: state.loginState.loading,
        logged: state.loginState.logged,
        token: state.loginState.token
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm);

