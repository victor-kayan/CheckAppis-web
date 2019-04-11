
import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            visible: props.visible,
            type: props.type,
            message: props.message
        };
        this.handleClose = this.handleClose.bind(this);
        
    }
   
    handleClose = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div className="alert" >
                {/* {
                    this.state.visible ? (
                        <Alert
                            message={this.state.message}
                            type={this.state.type}
                            closable
                            afterClose={this.handleClose}
                        />
                    ) : null
                } */}
                <h1>{this.state.visible}</h1>
            </div>
        );
    }
}

export default AlertComponent;
