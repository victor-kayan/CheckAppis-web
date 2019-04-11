import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col
} from 'antd';
import '../../pages/Login/styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../redux/actions';
import Api from '../../services/api';

class Login extends Component {

    // state = {
    //     inputValue: '',
    // }

    // inputChange = event => {
    //     this.setState({
    //         inputValue: event.target.value
    //     });

    // }

    async teste () {
        alert('Aqui')
        Api.post('/login', {
            email: 'apicultor@gmail.com',
            password: '123456'
        })
            .then(response => {
                console.log(response.status);
                Api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                // dispatch({
                //     type: LOGIN,
                //     payload: {
                //         loading: false,
                //         logged: true,
                //         token: response.data.token
                //     }
                // });
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                // dispatch({
                //     type: LOADING,
                //     payload: {
                //         logged: false,
                //         loading: false
                //     }
                // });
                // throw error;
            });
    }

    handleSubmit = (e) => {
    }



    render() {

        const { getFieldDecorator } = this.props.form;
        // const {
        //     clickButton,
        //     clickButton2,
        //     clickButton3,
        //     newValue,
        //     newValue2
        // } = this.props;

        // const { inputValue } = this.state;


        return (

            <div className="container">
                <div className="box">
                    {/* <input
                        onChange={this.inputChange}
                        type='text'
                        value={inputValue}
                    />

                    <button onClick={() => clickButton(inputValue)}>
                        Entrar
                     </button>

                    <h1>{newValue}</h1>

                    <br /> <br /> */}

                    <button onClick={this.teste}>
                        Entrar
                     </button>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Por favor informe seu email!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Por favor favro informe sua senha!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                             </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );

    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);


const mapStateToProps = store => ({
    newValue: store.clickState.newValue,
    newValue2: store.clickState.newValue2
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);

