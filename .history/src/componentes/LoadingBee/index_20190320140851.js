
import React, { Component } from 'react';
import { Spin, Avatar} from 'antd';
import Logo from '../../images/logo.png';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {

        const antIcon = <Avatar shape="square" size={100} icon="user"  spin/>
        
        return (
            <div>
                <Spin spinning={this.props.loading} indicator={antIcon} size={200} />
            </div>
        );
    }
}

export default LoadingBee;
