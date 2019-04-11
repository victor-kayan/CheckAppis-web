
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

                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />

                        <Button type="primary" type="primary" className="button">
                            Enviar
                        </Button>
                </Modal>
            </div>
        );
    }
}

export default ModalSenha;
