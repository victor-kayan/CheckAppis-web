
import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

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
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ModalSenha;
          