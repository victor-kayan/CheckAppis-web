
import React, { Component } from 'react';
import { Spin, Avatar, Icon} from 'antd';
import Logo from '../../images/logo.png';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    render() {

        const antIcon = <Icon src={Logo} spin />;

        return (
            <div>
                <Spin spinning={this.props.loading} indicator={antIcon} size={90} />
            </div>
        );
    }
}

export default LoadingBee;
