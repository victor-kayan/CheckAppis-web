import React from "react";
import { Form, Input, Icon, Divider, Row, Col, Select } from "antd";

class FormNovoApicultor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cidades: {}
    };

    this.teste = this.teste.bind(this);
  }

  teste = () => {
    this.setState({ cidades: false });
  };

  onChangeSelectEstado = uf => {
    this.props.handleChangeSelectEstado(uf);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const cidades = this.props.list_cidades || [];

    return (
      <div>
        <Divider orientation="left">Dados básicos do apicultor</Divider>

        <Form onSubmit={this.handleSubmit}>
          

         
        </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  FormNovoApicultor
)

export default WrappedNormalLoginForm;
