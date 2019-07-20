import React, { Component } from "react";
import { Col, Row, Layout } from "antd";

import Input from "../../../../componentes/Input";
import "./styles.css";

class perfil extends Component {
  render() {
    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <div className="editarDadosPessoais">
          <img
            src={`${localStorage.getItem("foto")}`}
            className="fotoPerfilEditar"
            alt={"Perfil"}
          />
          <h3 className={"pendenciaEmailTelefone"}>
            {localStorage.getItem("userName")}
          </h3>
        </div>

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: '25vh'
          }}
        >
        
        <Form onSubmit={this.alterarDados} style={{ padding: '2vh' }}>
                <div className='dadosPessoais' style={{ marginTop: '2vh', marginBottom: '2vh' }}>
                  <Form.Item label="Telefone">
                    {getFieldDecorator('telefone1', {
                      initialValue: telefone,
                      getValueFromEvent: (e) => maskaras.telefone(e.target.value),
                      rules: [{ required: true, message: 'Informe um telefone.' }],
                    })(
                      <Input
                        style={{ minWidth: '20vw', marginRight: 15 }}
                        className='inputPerfilStyle'
                        maxLength={15}
                      />)}
                  </Form.Item>

                  <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                      initialValue: email
                    })(
                      <Input
                        style={{ minWidth: '20vw' }}
                        className='inputPerfilStyle'
                      />)}
                  </Form.Item>
                </div>

                <div className='dadosPessoais' style={{ marginTop: '2vh', }}>
                  <h2 style={{ color: colors.secondary, fontSize: '1.4em' }}>Contato de Emergência</h2>
                </div>

                <div className='dadosPessoais' style={{ marginBottom: '2vh' }}>
                  <Form.Item label="Nome">
                    {getFieldDecorator('contato_emergencia', {
                      initialValue: contato_emergencia,
                    })(
                      <Input
                        style={{ minWidth: '20vw', marginRight: 15 }}
                        className='inputPerfilStyle'
                      />)}
                  </Form.Item>

                  <Form.Item label="Telefone">
                    {getFieldDecorator('telefone_emergencia', {
                      initialValue: telefone_emergencia,
                      getValueFromEvent: (e) => maskaras.telefone(e.target.value)
                    })(
                      <Input
                        style={{ minWidth: '20vw' }}
                        maxLength={15}
                        className='inputPerfilStyle'
                      />)}
                  </Form.Item>
                </div>

                <section style={{ borderTop: '1px dashed #d9d9d9', borderBottom: '1px dashed #d9d9d9' }}>
                  <div className='dadosPessoais' style={{ marginTop: '2vh' }}>

                  <div className='dadosPessoais'>
                    <Form.Item label="Logradouro">
                      {getFieldDecorator('logradouro', {
                        initialValue: rua
                      })(
                        <Input
                          style={{ width: '41.5vw' }}
                          className='inputPerfilStyle'
                        />)}
                    </Form.Item>
                  </div>

                  <div className='dadosPessoais'>
                    <Form.Item label="Complemento">
                      {getFieldDecorator('logradouro_complemento', {
                        initialValue: complemento
                      })(
                        <Input
                          style={{ width: '28vw', marginRight: 15 }}
                          className='inputPerfilStyle'
                        />)}
                    </Form.Item>

                    <Form.Item label="Número">
                      {getFieldDecorator('logradouro_numero', {
                        initialValue: numero
                      })(
                        <Input className='inputPerfilStyle' />)}
                    </Form.Item>
                  </div>

                  <div className='dadosPessoais' style={{ marginBottom: '2vh' }}>
                    <Form.Item label="Bairro">
                      {getFieldDecorator('bairro', {
                        initialValue: bairro
                      })(
                        <Input
                          style={{ width: '27.5vw', marginRight: 15 }}
                          className='inputPerfilStyle'
                        />)}
                    </Form.Item>

                    <Form.Item label="CEP">
                      {getFieldDecorator('cep', {
                        initialValue: cep,
                        getValueFromEvent: (e) => maskaras.cep(e.target.value),
                        rules: [{ max: 9 }],
                      })(
                        <Input
                          maxLength={9}
                          style={{ minWidth: '13vw' }}
                          className='inputPerfilStyle'
                        />)}
                    </Form.Item>
                  </div>

                </section>

              </Form>

        </div>
      </Layout.Content>
    );
  }
}

export default perfil;
