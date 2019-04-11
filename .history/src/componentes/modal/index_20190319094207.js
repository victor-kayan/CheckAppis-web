
import React from 'react';
import 'antd/dist/antd.css';
import {
    Modal, Form, Icon, Input, Button, Checkbox, Row, Col, Typography
} from 'antd';

class ModalSenha extends React.Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        return (
            <div>
                <Modal
                    title="Esqueceu sua senha? Insira seu email abaixo"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <p>Insira seu email e nós mandaremos um email para você redefinir sua senha</p>

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
                                <Button className="login-form-forgot" onClick={this.esqueciSenha}>Resetar senha</Button>
                                {/* <Button type="primary" onClick={() => this.setModal1Visible(true)}>Display a modal dialog at 20px to Top</Button> */}
                            </Row>
                            <Row className="button">
                                <Button type="primary" onClick={this.handleSubmit} type="primary" loading={this.props.loading} className="login-form-button button">
                                    Entrar
                                 </Button>
                            </Row>
                            Ou <Link to={'/registre-se'}>Registre-se agora!</Link>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        );
    }
}

export default ModalSenha;
