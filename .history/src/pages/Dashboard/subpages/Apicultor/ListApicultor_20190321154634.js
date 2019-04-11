
import React from 'react';
import 'antd/dist/antd.css';
import TableBee from '../../../../componentes/TableBee';
import ContentBee from '../../../../componentes/ContentBee';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllapicultor } from '../../../../redux/actions/apicultorActions';
import { Table, Button, Radio, Icon } from 'antd';

class ListApicultor extends React.Component {


  componentDidMount = () => {
    this.props.getAllapicultor();
  }

  render() {

    const columns = [
      {
        title: '#ID',
        dataIndex: 'id',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        render: text => <a href="javascript:;">{text}</a>,
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
        render: text => <a href="javascript:;">Value seu meerda</a>,
        render: () => {
          let a = 1;
          return (
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Button type="primary" shape="circle" icon="download" size={size} /><Button type="primary" shape="circle" icon="download" size={size} />
              </Radio.Group>
            </div>
          );
        }
      }
    ];

    const apicultores = this.props.list_apicultor || [];

    const table = <Table
      columns={columns}
      dataSource={apicultores}
      bordered
      title={() => 'Lista de apicultores cadastrados'}
      footer={() => 'Todos os resultados'}
    />

    const button =
      <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Novo apicultor
      </Button>

    return <ContentBee button={button} table={table} history={this.props.history} />

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