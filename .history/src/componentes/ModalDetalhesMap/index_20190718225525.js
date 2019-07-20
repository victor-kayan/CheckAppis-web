import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider } from "antd";

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
          title="Detalhes"
          centered
          width={700}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >

          <Divider orientation="left" style={{color: 'red'}}>Informações básicas do apiário</Divider>

          <Descriptions
            title=""
            layout="vertical"
            style={{ color: "red" }}
          >
            <Descriptions.Item label="Nome">
              Apiário Bela Flora
            </Descriptions.Item>
            <Descriptions.Item label="Descrição">
              O Maior apiário da região
            </Descriptions.Item>
            <Descriptions.Item label="Quantidade de colmeias">
              80
            </Descriptions.Item>
            <Descriptions.Item label="Data de criação">
              28/07/2019
            </Descriptions.Item>
          </Descriptions>

          <Divider orientation="left">Dados do apicultor</Divider>

          <Descriptions
            title=""
            layout="vertical"
            style={{ color: "red" }}
          >
            <Descriptions.Item label="Nome">
              Claudio Rodrigo
            </Descriptions.Item>
            <Descriptions.Item label="Sobrenome">
              Claudio Rodrigo
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;
