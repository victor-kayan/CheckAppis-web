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

    state = {
        inputValue: '',
    }

    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        });

        Api.post('/login', {
            email: 'apicultor@gmail.com',
            password: '123456'
        })
            .then(function (response) {
                console.log(response);
                alert('Aqui');

            })
            .catch(function (error) {
                console.log(error);
                alert('Aqui');

            });
    }

    handleSubmit = (e) => {
        alert('Aqui')
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //     }
        // });
       
        
    }



    render() {

        const { getFieldDecorator } = this.props.form;
        const {
            clickButton,
            clickButton2,
            clickButton3,
            newValue,
            newValue2
        } = this.props;

        const { inputValue } = this.state;


        return (

            <div className="container">
                <div className="box">
                    <input
                        onChange={this.inputChange}
                        type='text'
                        value={inputValue}
                    />

                    <button onClick={() => clickButton(inputValue)}>
                        Entrar
                     </button>

                    <h1>{newValue}</h1>

                    <br /> <br />

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

