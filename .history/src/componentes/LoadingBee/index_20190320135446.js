
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
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
                <div style={{ marginTop: 16 }}>
                    Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                </div>
            </div>
        );
    }
}

export default LoadingBee;
