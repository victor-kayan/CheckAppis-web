
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllapicultor } from '../../../../../redux/actions/apicultorActions';
import { Table, Button, Layout, Tag } from 'antd';
import BreadcrumBee from '../../../../../componentes/BreadcrumBee';

class ListApicultor extends React.Component {

  componentDidMount = () => {
    this.props.getAllapicultor();
  }

  render() {

    const apicultores = this.props.list_apicultor || [];

    const columns = [
      {
        title: '#ID',
        dataIndex: 'id',
      },
      {
        title: 'Nome',
        dataIndex: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Qtd apiários',
        dataIndex: 'qtdApiarios',
        render: text => {
          return (
            <span>
              <Tag color="blue" key={'/tag'}>{text}</Tag>
            </span>
          );
        }
      },
      {
        title: 'Ações',
        dataIndex: 'acoes',
        render: () => {
          return (
            <div>
              <Button type="default" shape="circle" icon="form" size={65} />
              <Button type="default" shape="circle" icon="delete" size={65} />
            </div>
          );
        }
      }
    ];

    const mapa = [{
      key: '1',
      name: 'Home',
      icon: 'home',
    }, {
      key: '2',
      name: 'Apicultor',
      icon: 'team',
    },
    {
      key: '3',
      name: 'Lista',
      icon: 'ordered-list',
    }];

    return (

      <Layout.Content style={{ margin: '0 16px' }}>

        <BreadcrumBee mapa={mapa} />

        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <div>
            <Button style={{ float: 'right', marginBottom: 16 }} type="primary" icon="plus">
              Novo apicultor
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={apicultores}
            bordered
            loading={this.props.loading}
            title={() => 'Lista de apicultores cadastrados'}
            footer={() => 'Todos os resultados'}
          />
        </div>
      </Layout.Content>

    );
  }
}

function mapStateToProps(state, props) {
  return {
    list_apicultor: state.apicultorState.list_apicultor,
    loading: state.apicultorState.loading,
    codeErro: state.apicultorState.codeErro
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllapicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListApicultor);