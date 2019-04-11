
import React from 'react';
import 'antd/dist/antd.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            visible: props.visible
        };
        this.handleClose = this.handleClose.bind(this);
        
    }
   
    handleClose = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div  >
                {
                    this.state.visible ? (
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