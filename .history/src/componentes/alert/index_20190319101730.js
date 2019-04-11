
import React from 'react';
import 'antd/dist/antd.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {
  state = {
    visible: true,
  }

  handleClose = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div style={{marginBottom:'30'}}>
        {
          this.state.visible ? (
            <Alert
            style={{margin:'40'}}
              message='Alert de erro'
              type='success'
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
      </div>
    );
  }
}

export default AlertComponent;
          