
import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class ModalSenha extends React.Component {
 
  state = {
    modal1Visible: false,
    modal2Visible: false,
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
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

export default ModalSenha;
          