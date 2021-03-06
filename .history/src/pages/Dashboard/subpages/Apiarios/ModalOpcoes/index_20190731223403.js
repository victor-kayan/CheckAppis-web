import React from "react";
import "antd/dist/antd.css";
import { Modal, Divider, Row, Button, Col } from "antd";

class ModalOpcoes extends React.Component {
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
          title="Opções"
          centered
          width={400}
          visible={this.state.modalVisible}
          //onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          footer={null}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Button icon="plus">Novo</Button>
            </Col>
            <Col span={8}>
              <Button icon="pencil">Editar</Button>
            </Col>
            <Col span={8}>
              <Button icon="trash">Remover</Button>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalOpcoes;
