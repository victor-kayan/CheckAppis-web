import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal, Descriptions, Divider, Spin, Row } from "antd";
import LoadingBee from "../LoadingBee";

class ModalDetalhesMap extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    const { apiario, loadingApiario } = this.props;

    // console.log('====================================');
    // console.log(apiario.apicultor.name);
    // console.log('====================================');

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
          {loadingApiario ? (
            <div styles={{ justifyContent: "center", alignItems: "center" }}>
              <Spin size="smal" loading={true} />
            </div>
          ) : (
            <Row>
              <div styles={{ justifyContent: "center", alignItems: "center" }}>
                <Spin size="smal" loading={true} />
              </div>
              <Divider orientation="left" style={{ color: "black" }}>
                Informações básicas do apiário
              </Divider>

              <Descriptions title="" layout="vertical" style={{ color: "red" }}>
                <Descriptions.Item label="Nome">
                  {apiario.nome}
                </Descriptions.Item>
                <Descriptions.Item label="Descrição">
                  {apiario.descricao}
                </Descriptions.Item>
                <div
                  styles={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Spin size="smal" loading={true} />
                </div>
                <Descriptions.Item label="Quantidade de colmeias">
                  {apiario.qtdColmeias}
                </Descriptions.Item>
                <Descriptions.Item label="Data de criação">
                  {apiario.created_at}
                </Descriptions.Item>
              </Descriptions>

              <Divider orientation="left" style={{ color: "black" }}>
                Dados do apicultor
              </Divider>

              <Descriptions title="" layout="vertical">
                <Descriptions.Item label="Nome">
                  {/* {apiario.apicultor.name} */}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {/* {apiario.apicultor.email} */}
                </Descriptions.Item>
                <Descriptions.Item label="Telefone">
                  {/* {apiario.apicultor.telefone} */}
                </Descriptions.Item>
              </Descriptions>
            </Row>
          )}
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;
