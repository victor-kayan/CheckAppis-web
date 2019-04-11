
import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Alert } from 'antd';

class AlertComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            type: props.type,
            message: props.message
        };
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ visible: props.visible });
    }

    handleClose = () => {
        this.setState({ visible: false });
        alert(this.state.visible);
    }

    render() {
        return (
            <div className="alert" >
                {
                    this.state.visible ? (
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
