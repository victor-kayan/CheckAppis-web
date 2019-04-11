import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../pages/Login/styles.css';
import {
    Form, Icon, Input, Button, Checkbox, Row, Typography
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../../redux/actions/loginActions';
import Logo from '../../images/logo.png';
import ModalSenha from '../../componentes/Modal';
import AlertComponent from '../../componentes/Alert';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false,
            codeErro: '',
            tentouLogar: false,
            message: "",
        };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logged === true) {
            this.props.history.push("/dashboard");
        } else if (!nextProps.logged && !nextProps.loading && this.state.tentouLogar) {
            this.setState({ error: true, message: "Email e/ou senha incorretas" });
            this.setState({ tentouLogar: false });
            this.refs.alert.openAlert();
        }
    }

    setEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    setPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    esqueciSenha = () => {
        this.refs.openModal.setModalVisible(true);
        this.setState({ error: false });
    }

    validFields = () => {
        if (this.state.email === "" || this.state.password === "") {
            return false;
        }
        return true;
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        this.setState({ tentouLogar: true });

        if (this.validFields()) {
            this.props.login({ email, password });
        } else {
            this.setState({ error: true, message: "Preencha todos os campos" });
            this.setState({ tentouLogar: false });
            this.refs.alert.openAlert();
        }
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        const { email, password, message, error } = this.state;
        const { Title } = Typography;

        console.log(error);

        return (
            <div className="container">
                <div className="box">
                    <Form className="login-form" >
                        <Form.Item>
                            <img className="logo" src={Logo} />
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
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" value={email} onChange={this.setEmail} />
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

                    <ModalSenha ref={'openModal'} />

                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

function mapStateToProps(state, props) {
    return {
        loading: state.userState.loading,
        logged: state.userState.logged,
        token: state.userState.token,
        codeErro: state.userState.codeErro
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ user }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm);
