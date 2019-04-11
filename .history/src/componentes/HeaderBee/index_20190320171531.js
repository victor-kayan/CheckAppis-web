
import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {
    Menu, Icon, Avatar, PageHeader, Dropdown
} from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/actions/userActions';

class HeaderBee extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logged != true) {
            this.props.history.push("/login");
        }
    }

    logout = () => {
        this.props.logout();
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item key="1"><Icon type="user" /> Meus dados</Menu.Item>
                <Menu.Item onClick={this.logout} key="2"><Icon type="logout" /> Sair</Menu.Item>
            </Menu>
        );

        return (
            <PageHeader
                onBack={() => null}
                backIcon={<Icon type="check" style={{ fontSize: '15pt' }} />}
                title={<strong>Bee<strong style={{ color: '#FFD915' }}>Check</strong></strong>}
                subTitle="Sistema de monitoramneto de colmeias e apiários"
                extra={
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            <strong style={{color: '#ccc', fontSize: '12pt', marginRight:'10px'}}>Olá, {localStorage.getItem('userName')}</strong>
                            <Avatar size="large" icon="user" />
                        </a>
                    </Dropdown>
                }
            />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.userState.loading,
        logged: state.userState.logged,
        token: state.userState.token,
        codeErro: state.userState.codeErro
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBee);