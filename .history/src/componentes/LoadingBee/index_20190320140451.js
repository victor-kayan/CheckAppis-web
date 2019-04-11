
import React, { Component } from 'react';
import { Spin, Avatar} from 'antd';
import Logo from '../../images/logo.png';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {
        return (
            <div>
                <Spin spinning={this.props.loading} indicator={Logo} size={90}  />} />
            </div>
        );
    }
}

export default LoadingBee;
