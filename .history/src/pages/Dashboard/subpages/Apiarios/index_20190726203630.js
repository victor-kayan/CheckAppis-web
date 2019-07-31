import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BreadcrumbBee from "../../../../componentes/BreadcrumBee";
import Mapa from "../../../../componentes/Mapa";

class IndeApiario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {},
      loadingHome: false,
      qtd_apiarios: 0,
      qtd_colmeias: 0,
      qtd_apicultores: 0
    };
  }

  //   componentDidMount = () => {
  //     if (localStorage.getItem("primeiroAcesso")) {
  //       notification.open({
  //         message: "Bem vindo",
  //         description: localStorage.getItem("userName"),
  //         icon: <Icon type="smile" style={{ color: colors.COR_PRYMARY }} />
  //       });
  //     }
  //     localStorage.removeItem("primeiroAcesso");

  //     this.props.getAllInfoHome();
  //   };

  render() {
    const mapa = [
      {
        key: "",
        name: "Home",
        icon: "home"
      }
    ];

    const { apiarios } = this.props.apiarios;

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumbBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <Row gutter={24}>
            <Col span={24}>
              <div style={{ marginTop: 30 }}>
                <Mapa
                  height={"700px"}
                  cadastroAbilitado={true}
                  //apiarios={apiarios}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    //home: state.homeState.home,
    //loadingHome: state.homeState.loadingHome,
    //code: state.homeState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndeApiario);
