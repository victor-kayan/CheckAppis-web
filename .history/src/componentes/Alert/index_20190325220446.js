
import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
            ,
            type: props.type,
            message: props.message
        };
        this.handleClose = this.handleClose.bind(this);
        this.openAlert = this.openAlert.bind(this);
        //this.openAlert = React.createRef();
    }

    handleClose = () => {
        this.setState({ visible: false });
    }

    openAlert = () => {
        this.setState({ visible: true });
    }

    render() {
        return (
            <div className="alert" >
                {
                    this.state.visible ? (
                        <Alert
                            message={this.props.message}
                            type={this.props.type}
                            closable
                            afterClose={this.handleClose}
                        />
                    ) : null
                }
                {this.props.children}
            </div>
        );
    }
}

export default AlertComponent;
