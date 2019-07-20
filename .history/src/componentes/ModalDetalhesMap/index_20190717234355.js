import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal } from "antd";

class ModalDetalhesMap extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    return (
      <div>
        <Modal
          title="Detalhes do  apiário selecionado"
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
        onCancel={() => this.setModalVisible(false)}
        >
          <p>D</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;
