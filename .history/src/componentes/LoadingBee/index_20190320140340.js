
import React, { Component } from 'react';
import { Spin, Avatar} from 'antd';
import Logo from '../../images/logo';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {
        return (
            <div>
                <Spin spinning={this.props.loading}  size={90} tip={<Avatar size="large" src={Logo} />} />
            </div>
        );
    }
}

export default LoadingBee;
