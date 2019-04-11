
import React from 'react';
import 'antd/dist/antd.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {
   
    handleClose = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div  >
                {
                    {this.props.visible } ? (
                        <Alert
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
