import React, { Component } from "react";
import { Col, Row, Layout } from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import CardBee from "../../../../componentes/CardBee";
import apiario from "../../../../images/bee-hive.png";
import colmeia from "../../../../images/honeycomb.png";
import apicultor from "../../../../images/apiarist.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllInfoHome } from "../../../../redux/actions/homeActions";

class Home extends Component {
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

  componentDidMount = () => {
    this.props.getAllInfoHome();
  };


  render() {
    const mapa = [
      {
        key: "1",
        name: "Home",
        icon: "home"
      }
    ];

    const { qtd_apiarios, qtd_colmeias, qtd_apicultores} = this.props.home;

    console.log(this.props)

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            margin: 10,
            background: "#fff",
            minHeight: 360
          }}
        >
          <Row gutter={24}>
            <Col span={8}>
              <CardBee
                urlIcon={apiario}
                //title={qtd_apiarios}
                description="20 Apiários"
               // loading={loadingHome}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon={colmeia}
                title="Quantidade de colmeias"
                description="150 Colmeias"
                //loading={loadingHome}
              />
            </Col>
            <Col span={8}>
              <CardBee
                urlIcon={apicultor}
                title="Quantidade de apicultores"
                description="4 Apicultores"
                //loading={loadingHome}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Layout.Content style={{ marginTop: 20 }}>
              <div
                style={{
                  padding: 24,
                  margin: 10,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  minHeight: 360
                }}
              />
            </Layout.Content>
          </Row>
        </div>
      </Layout.Content>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    home: state.homeState.home,
    loadingHome: state.homeState.loadingHome,
    code: state.homeState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllInfoHome }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
