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
import Dashboad from '../Dashboard';
import uris from '../../assets/uris'
import { Link } from "react-router-dom";
import ModalSenha from '../../componentes/modal';
import AlertComponent from '../../componentes/alert';

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

    componentDidMount() {
        if (localStorage.getItem('token')) {
            alert('Tem user logado nessa bagaça')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.token) {
            this.props.history.push("/dashboard");
        }
        console.log('Erro: ' + nextProps.error);
    }

    setEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    setPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    esqueciSenha = () => {
        this.refs.openModal.setModalVisible(true);
    }

    handleSubmit() {
        const { email, password } = this.state;
        this.props.login({ email, password });
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

                        <AlertComponent />

                        {/* <Form.Item>
                            {getFieldDecorator('email', {
                                rrules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" value={email} onChange={this.setEmail} />
                            )}
                        </Form.Item> */}

                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'Informe um formato de email válido!',
                                }, {
                                    required: true, message: 'Por favor informe seu email!',
                                }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" value={email} onChange={this.setEmail} />
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{
                                    len: 3, message: 'Sua senha tem que ter no minixo 3 caracteres',
                                }, {
                                    required: true, message: 'Por favor informe sua senha!',
                                }],
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
                                    <Checkbox style={{ float: 'left' }}>Lembrar-me</Checkbox>
                                )}
                                <Button style={{ float: 'right' }} className="login-form-forgot" onClick={this.esqueciSenha}>Recuperar senha</Button>
                            </Row>
                            <Row className="button">
                                <Button type="primary" onClick={this.handleSubmit} type="primary" loading={this.props.loading} className="login-form-button button">
                                    Entrar
                                 </Button>
                            </Row>
                            Ou <Link to={'/registre-se'}>Registre-se agora!</Link>
                        </Form.Item>
                    </Form>

                    <ModalSenha ref={'openModal'} />

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

