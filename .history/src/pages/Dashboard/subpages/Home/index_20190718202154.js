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
import Mapa from "../../../../componentes/Mapa";

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

    const { qtd_apiarios, qtd_colmeias, qtd_apicultores } = this.props.home;

    console.log(this.props.loadingHome);

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
          <Row gutter={8}>
            <Col xs={8} sm={4} md={6} lg={8} xl={10}>
              <CardBee
                urlIcon={apiario}
                title="Quantidade de apiários"
                description={qtd_apiarios + " Apiários"}
                loading={this.props.loadingHome}
              />
            </Col>
            <Col xs={8} sm={4} md={6} lg={8} xl={10}>
              <CardBee
                urlIcon={colmeia}
                title="Quantidade de colmeias"
                description={qtd_colmeias + " Colmeias"}
                loading={this.props.loadingHome}
              />
            </Col>
            <Col xs={8} sm={4} md={6} lg={8} xl={10}>
              <CardBee
                urlIcon={apicultor}
                title="Quantidade de apicultores"
                description={qtd_apicultores + " Apicultores"}
                loading={this.props.loadingHome}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <div style={{marginTop:30}}>
                <Mapa />
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
