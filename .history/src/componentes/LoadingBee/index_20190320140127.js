
import React, { Component } from 'react';
import { Spin, Avatar} from 'antd';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {
        return (
            <div>
                <Spin spinning={this.props.loading}  size="large" tip={<Avatar size="large" icon="user" />}>
                </Spin>
            </div>
        );
    }
}

export default LoadingBee;
