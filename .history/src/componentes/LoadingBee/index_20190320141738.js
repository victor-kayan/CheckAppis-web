
import React, { Component } from 'react';
import { Spin, Avatar} from 'antd';
import Logo from '../../images/logo.png';

class LoadingBee extends Component {
    state = { loading: false }

    toggle = (value) => {
        this.setState({ loading: value });
    }

    componentDidMount(){
        if(!localStorage.getItem('token')){
            this.props.history.push('/login');
        }
    }

    render() {

        const antIcon = <Avatar src={Logo} size={100} icon="user"  spin/> 
        
        return (
            <div>
                <Spin spinning={this.props.loading} indicator={antIcon} size={200} />
            </div>
        );
    }
}

export default LoadingBee;
