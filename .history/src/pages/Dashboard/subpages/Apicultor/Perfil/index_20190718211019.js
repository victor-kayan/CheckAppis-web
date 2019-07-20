import React, { Component } from "react";
import { Col, Row, Layout } from "antd";

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
        
        </div>
      </Layout.Content>
    );
  }
}

export default perfil;
