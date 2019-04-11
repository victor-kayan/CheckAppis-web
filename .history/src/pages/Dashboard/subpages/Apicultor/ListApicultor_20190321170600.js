
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllapicultor } from '../../../../redux/actions/apicultorActions';
import { Table, Button, Layout, Breadcrumb } from 'antd';
import BreadcrumBee  from '../../../../componentes/BreadcrumBee';

class ListApicultor extends React.Component {

  componentDidMount = () => {
    this.props.getAllapicultor();
  }

  render() {

    const columns = [
      {
        title: '#ID',
        dataIndex: 'id',
      },
      {
        title: 'Nome',
        dataIndex: 'name',
      }, {
        title: 'Foto',
        className: 'foto',
        dataIndex: 'money',
      }, {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Ações',
        dataIndex: 'acoes',
        render: () => {
          let a = 1;
          return (
            <div>
              <Button type="default" shape="circle" icon="form" size={65} />
              <Button type="default" shape="circle" icon="delete" size={65} />
            </div>
          );
        }
      }
    ];

    const apicultores = this.props.list_apicultor || [];

    return (

      <Layout.Content style={{ margin: '0 16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb> */}

        <BreadcrumBee  />

        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <div>
            <Button style={{ float: 'right' }} onClick={this.handleAdd} type="primary" icon="plus" style={{ marginBottom: 16 }}>
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