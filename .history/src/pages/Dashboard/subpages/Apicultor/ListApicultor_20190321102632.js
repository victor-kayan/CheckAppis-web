
import React from 'react';
import 'antd/dist/antd.css';
import TableBee from '../../../../componentes/TableBee';
import ContentBee from '../../../../componentes/ContentBee';

class ListApicultor extends React.Component {

  render() {

    const columns = [{
      title: 'Nome',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Email',
      className: 'column-money',
      dataIndex: 'money',
    }, {
      title: 'Função',
      dataIndex: 'address',
    }, {
      title: 'Ações',
      dataIndex: 'address',
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    }];

    const table = <TableBee columns={columns} dataSource={data} />;

    return <ContentBee  nome={"Claudio Rodrigo"} table={table}/>
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