
import React, { Component } from 'react';
import { Spin, Avatar} from 'antd';
import Logo from '../../images/logo.png';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {

        const antIcon = <Avatar shape="square" size="large" icon="user"  spin/>
        
        return (
            <div>
                <Spin spinning={this.props.loading} indicator={antIcon} size={90} />
            </div>
        );
    }
}

export default LoadingBee;
