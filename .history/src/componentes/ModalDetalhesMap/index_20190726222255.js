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

    console.log('====================================');
    console.log('Detalhes: ', this.props);
    console.log('====================================');
    
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
          <Divider orientation="left" style={{ color: "black" }}>
            Informações básicas do apiário
          </Divider>

          <Descriptions title="" layout="vertical" style={{ color: "red" }}>
            <Descriptions.Item label="Nome">
              {/* {this.props.apiario.nome} */}
            </Descriptions.Item>
            <Descriptions.Item label="Descrição">
              {this.props.apiario.descricao}
            </Descriptions.Item>
            <Descriptions.Item label="Quantidade de colmeias">
              {this.props.apiario.qtdColmeias}
            </Descriptions.Item>
            <Descriptions.Item label="Data de criação">
              {this.props.apiario.created_at}
            </Descriptions.Item>
          </Descriptions>

          <Divider orientation="left" style={{ color: "black" }}>
            Dados do apicultor
          </Divider>

          <Descriptions title="" layout="vertical">
            <Descriptions.Item label="Nome">
              {this.props.apiario.apicultor.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {this.props.apiario.apicultor.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">
              {this.props.apiario.apicultor.telefone}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;
