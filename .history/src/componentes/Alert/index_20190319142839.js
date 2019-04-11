
import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {

    // constructor(props) {
    //     super(props); 
    //     // this.state = {
    //     //     visible: props.visible,
    //     //     type: props.type,
    //     //     message: props.message
    //     // };
    //     this.handleClose = this.handleClose.bind(this);        
    // }
   
    handleClose = () => {
        return null;
    }

    render() {
        return (
            <div className="alert" >
                {
                    this.props.visible ? (
                        <Alert
                            message="Teste"
                            type="error"
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
