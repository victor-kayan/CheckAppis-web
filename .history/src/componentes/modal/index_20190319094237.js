
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
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Por favor informe seu email!' }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" value={email} onChange={this.setEmail} />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Row className="button">
                                <Button type="primary" onClick={this.handleSubmit} type="primary" loading={this.props.loading} className="login-form-button button">
                                    Enviar
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
