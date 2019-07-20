import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Modal } from "antd";

class ModalDetalhesMap extends React.Component {
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
          title="Vertically centered modal dialog"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ModalDetalhesMap;
