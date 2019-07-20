import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions } from "antd";

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
          size={'large'}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <Descriptions title="Informações do apiário" layout="vertical">
            <Descriptions.Item label="Nome">Apiário Bela Flora</Descriptions.Item>
            <Descriptions.Item label="Descrição">O Maior apiário da região</Descriptions.Item>
            <Descriptions.Item label="Quantidade de colmeias">
              80
            </Descriptions.Item>
            <Descriptions.Item label="Apicultor Responsável">Claudio Rodrigo</Descriptions.Item>
            <Descriptions.Item label="Data de criação">
              28/07/2019
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;
