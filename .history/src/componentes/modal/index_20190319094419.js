
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

        const { getFieldDecorator } = this.props.form;

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
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"  />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Row className="button">
                                <Button type="primary"  type="primary"  className="login-form-button button">
                                    Enviar
                                 </Button>
                            </Row>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        );
    }
}

export default ModalSenha;
