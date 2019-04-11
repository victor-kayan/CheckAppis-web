import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../pages/Login/styles.css';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col, Typography
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/loginActions';
import Logo from '../../images/logo.png';
import Dashboad from '../Dashboard'

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     if (localStorage.getItem('token')) {
    //         console.log(window.location.);
    //     }
    // }

    // componentDidUpdate(prevProps) {

    // }

    // componentWillReceiveProps(nextProps) {
    //     //this.redirectTo(nextProps);
    // }

    setEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    setPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit() {
        const { email, password } = this.state;
        this.props.login({ email, password });

        alert(localStorage.getItem('token'));

        if (this.props.logged) {
            localStorage.setItem('token', this.props.token);
            window.location = uris.DOMINIO.dashboard
        }
        else {
            console.log('Não logado')
        }
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { email, password } = this.state;
        const { Title } = Typography;

        return (
            <div className="container">
                <div className="box">
                    <Form className="login-form">
                        <Form.Item>
                            <img className="logo" src={Logo} />
                            <Title level={2}>Bee<span style={{ color: '#FFD915' }}>check</span></Title>
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Por favor informe seu email!' }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" value={email} onChange={this.setEmail} />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Por favor favro informe sua senha!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" value={password} placeholder="Senha" onChange={this.setPassword} />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Row className="">
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Lembrar-me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Resetar senha</a>
                            </Row>
                            <Row className="button">
                                <Button type="primary" onClick={this.handleSubmit} type="primary" loading={this.props.loading} className="login-form-button button">
                                    Entrar
                                 </Button>
                            </Row>
                            Ou <a href="">Registre-se agora!</a>
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

