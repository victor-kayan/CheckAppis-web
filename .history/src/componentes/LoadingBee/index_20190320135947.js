
import React, { Component } from 'react';
import { Spin, Switch, Alert, Icon } from 'antd';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {
        return (
            <div>
                <Spin spinning={this.props.loading} delay={50} size="large" tip="Carregando">
                    
                </Spin>
            </div>
        );
    }
}

export default LoadingBee;
