
import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {
    Menu, Icon, Avatar, PageHeader, Dropdown, message
} from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/userActions';

class HeaderBee extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    componentDidMount() {
        //localStorage.removeItem('token');
    }

    render() {

        const logout = ({ key }) => {
            localStorage.removeItem('token');
        };

        const menu = (
            <Menu>
                <Menu.Item key="1"><Icon type="user" /> Meus dados</Menu.Item>
                <Menu.Item onClick={logout} key="2"><Icon type="logout" /> Sair</Menu.Item>
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
        code: state.userState.code
    };
 }
 
 function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
 }
 
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(HeaderBee);