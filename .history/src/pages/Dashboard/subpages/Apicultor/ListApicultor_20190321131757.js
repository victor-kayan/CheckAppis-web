
import React from 'react';
import 'antd/dist/antd.css';
import TableBee from '../../../../componentes/TableBee';
import ContentBee from '../../../../componentes/ContentBee';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllapicultor } from '../../../../redux/actions/apicultorActions';

class ListApicultor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list_apicultor: [],
    };
    // this.setEmail = this.setEmail.bind(this);
    // this.setPassword = this.setPassword.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.props.getAllapicultor();
  }

  render() {
    const { list_apicultor } = this.props;
    // console.log("Teste")
    // console.log(list_apicultor)

    // // if(list_apicultor){
    //   // list_apicultor.map(apicultor => {
    //   //   console.log("teste")
    //     // return (
    //     //   <li>sdfd</li>
    //     // )
    // //   }

    // // );
    // // }111


    // const columns = [{
    //   title: '#ID',
    //   dataIndex: 'name',
    //   render: text => <a href="javascript:;">{text}</a>,
    // }, {
    //   title: 'Nome',
    //   className: 'column-money',
    //   dataIndex: 'money',
    // }, {
    //   title: 'Email',
    //   dataIndex: 'address',
    // }, {
    //   title: 'Ações',
    //   dataIndex: 'address',
    // }];

    // const data = [{
    //   key: '1',
    //   name: 'John Brown',
    //   money: '￥300,000.00',
    //   address: 'New York No. 1 Lake Park',
    // }
    // ];

    // const table = <TableBee columns={columns} dataSource={data} />;

    // return <ContentBee nome={"Claudio Rodrigo"} table={table} history={this.props.history} />


    console.log("TESTE", this.props)
    return (
      <div>
       
      </div>
    )
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