import React, { Component } from "react";
import { Col, Row, Layout } from "antd";

import './styles.css';

class perfil extends Component {
  render() {
    return (
      <Layout.Content style={{ margin: "0 16px" }}>
             <div className='editarDadosPessoais'>
                {/* <img src={`${Api.AgilityPessoal.defaults.baseURL}cliente/foto/${this.props.user.foto}?dc=${new Date().getTime()}`} className='fotoPerfilEditar' alt={'Perfil'} /> */}
                <h3 className={'pendenciaEmailTelefone'}>Guilherme da Costa Duarte</h3>
              </div>
      </Layout.Content>
    );
  }
}

export default perfil;
