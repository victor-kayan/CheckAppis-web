
import React from 'react';
import 'antd/dist/antd.css';
import './styles'
import {
    Modal, Icon, Input, Button, Row
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
                    footer={null}
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <p>Insira seu email e nós enviaremos um email para você redefinir sua senha</p>

                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />

                    <Row className="button">
                        <Button type="primary" type="primary" className="login-form-button button-modal">
                            Enviar
                       </Button>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default ModalSenha;