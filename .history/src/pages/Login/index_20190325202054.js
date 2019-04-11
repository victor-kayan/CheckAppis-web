import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../pages/Login/styles.css';
import {
    Form, Icon, Input, Button, Checkbox, Row, Typography
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/userActions';
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
            code: '',
            tentouLogar: false,
            message: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logged === true) {
            console.log(nextProps);
            this.props.history.push("/dashboard");
        } else if (!nextProps.logged && !nextProps.loading && this.state.tentouLogar) {
            if (nextProps.code >= 500) {
                this.setState({ error: true, message: "Aguarde!! Estamos tendo problemas no servidor" });
                console.log("Valor do codigo" + nextProps.code)
            } else {
                this.setState({ error: true, message: "Email e/ou senha incorretas" });
                console.log("Valor do codigo" + nextProps.code)
            }
            this.setState({ tentouLogar: false });
            this.refs.alert.openAlert();
        }
    }

    esqueciSenha = () => {
        this.refs.openModal.setModalVisible(true);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ tentouLogar: true });
                this.props.login({ email: values.email, password: values.password });
            }
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        const { message, error } = this.state;
        const { Title } = Typography;

        return (
            <div className="container">
                <div className="box">

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
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email" />
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
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Senha" type="password" />
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
        user: state.userState.user,
        loading: state.userState.loading,
        logged: state.userState.logged,
        token: state.userState.token,
        code: state.userState.code
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm);

