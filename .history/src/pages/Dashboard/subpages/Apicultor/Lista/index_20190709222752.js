
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllapicultor, deleteApicultor } from '../../../../../redux/actions/apicultorActions';
import { Table, Button, Layout, Tag, Popconfirm, message } from 'antd';
import BreadcrumBee from '../../../../../componentes/BreadcrumBee';
import ModalNovoApicultor from '../ModalNovoApicultor';
import ModalEditApicultor from '../ModalEditApicultor';
import lodash from "lodash";

class ListApicultor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleModalEdit: false,
      apicultor: {},
      pagination: {},
      currentPage: 0,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.columns = [
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
              <Tag color="blue" key={'tag'}>{text}</Tag>
            </span>
          );
        }
      },
      {
        title: 'Qtd colmeias',
        dataIndex: 'qtdColmeias',
        render: text => {
          return (
            <span>
              <Tag color="blue" key={'tag 2'}>
                {text ? text : 0}
              </Tag>
            </span>
          );
        }
      },
      {
        title: 'Ações',
        dataIndex: 'acoes',
        render: (text, record) => {
          return (
            <div>
              <Button type="default" shape="circle" icon="form" size="large" idUser={record.id} onClick={() => this.handleOpenModalEdit(record)} />
              <Popconfirm title="Deletar apicultor?" okText="Sim" cancelText="Cancelar"
                onConfirm={() => this.handleDelete(record.id)}>
                <Button type="default" shape="circle" icon="delete" size="large" />
              </Popconfirm>
            </div>
          );
        }
      }
    ];
  }

  componentDidMount = () => {
    this.getAllapicultores();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.code === 204) {
      message.success('Removido com sucesso');
    } if (!lodash.isEqual(this.props.list_apicultor, nextProps.list_apicultor)) {
      console.log("lista de apicultores ", nextProps.list_apicultor);

      const pagination = { ...this.state.pagination };

      pagination.total = nextProps.data.incidentes.total;
      pagination.current = nextProps.data.incidentes.current_page;
      pagination.last_page = nextProps.data.incidentes.last_page;

      this.setState({
        pagination,
      });
    }
  }

  handleOpenModalEdit = (record) => {
    if (this.state.visibleModalEdit === true) {
      this.setState({ apicultor: {} });
    } else {
      this.setState({ apicultor: record, visibleModalEdit: true });
    }
  }

  handleDelete = (id) => {
    this.props.deleteApicultor({ id });
  }

  handleOpenModal = () => {
    this.setState({ visible: true });
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.getAllapicultores({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  getAllapicultores = (params = {}) => {
    var currentPage = (this.state.currentPage < this.state.pagination.last_page) ? (this.state.currentPage + 1) : 1;
    var page = (Object.keys({ ...params }).length === 0) ? currentPage : params.page;

    this.props.getAllapicultor(page)
    this.setState({ currentPage: page });
  };

  render() {

    console.log('Pagination: ', this.state.pagination);
    const apicultores = this.props.list_apicultor || [];
    const { visible, visibleModalEdit } = this.state;

    const columns = this.columns.map(col => {
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });

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
            <Button onClick={this.handleOpenModal} style={{ marginBottom: 16 }} type="primary" icon="plus">
              Novo apicultor
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={apicultores.data}
            bordered
            rowKey={record => record.id}
            pagination={{ total: 2, last_page: 5, current: 1 }}
            loading={this.props.loading}
            onChange={this.handleTableChange}
            title={() => 'Lista de apicultores cadastrados'}
            footer={() => 'Todos os resultados'}
          />
        </div>

        <ModalNovoApicultor visible={visible} onClose={() => this.setState({ visible: false })}
          onCancel={() => this.setState({ visible: false })} />

        <ModalEditApicultor apicultor={this.state.apicultor} visible={visibleModalEdit} onClose={() => this.setState({ visibleModalEdit: false })}
          onCancel={() => this.setState({ visibleModalEdit: false })} />

      </Layout.Content>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    list_apicultor: state.apicultorState.list_apicultor,
    loading: state.apicultorState.loading,
    code: state.apicultorState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllapicultor, deleteApicultor }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListApicultor);