
import React, { Component } from 'react';
import { Spin, Switch, Alert } from 'antd';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {
        return (
            <div>
                <Spin spinning={this.props.loading}>
                    <Icon type="android" />
                </Spin>
            </div>
        );
    }
}

export default LoadingBee;
