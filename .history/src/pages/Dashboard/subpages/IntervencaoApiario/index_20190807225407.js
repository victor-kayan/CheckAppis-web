import React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllApiariosIntervencoes } from "../../../../redux/actions/intervencoesApiarioActions/";
import moment from "moment";
import "moment/locale/pt-br";

import {
  Table,
  Button,
  Layout,
  Popconfirm,
  notification,
  Icon,
  Tag
} from "antd";
import BreadcrumBee from "../../../../componentes/BreadcrumBee";
import lodash from "lodash";
import { colors } from "../../../../assets";

class IntevencaoApiario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      intervencoesApiarios: {},
      colmeiaId: null,
      pagination: {},
      currentPage: 0,
      isClicouButtonDelete: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.openModalIntervir = this.openModalIntervir.bind(this);

    this.columns = [
      {
        title: "#ID",
        dataIndex: "id"
      },
      {
        title: "Apiário",
        dataIndex: "colmeia.apiario.nome"
      },
      {
        title: "Colmeia",
        dataIndex: "colmeia.nome"
      },
      {
        title: "Qtd quadros mel",
        dataIndex: "qtd_quadros_mel"
      },
      {
        title: "Qtd Quadros Polén",
        dataIndex: "qtd_quadros_polen"
      },
      {
        title: "Qtd Cria Aberta",
        dataIndex: "qtd_cria_aberta"
      },
      {
        title: "Qtd Cria Fechada",
        dataIndex: "qtd_cria_fechada"
      },
      {
        title: "Tem Abelhas Mortas",
        dataIndex: "tem_abelhas_mortas",
        render: (text, record) => {
          return (
            <div>
              {text ? <Tag color="green">Sim</Tag> : <Tag color="red">Não</Tag>}
            </div>
          );
        }
      },
      {
        title: "Tem Postura",
        dataIndex: "tem_postura",
        render: (text, record) => {
          return (
            <div>
              {text ? <Tag color="green">Sim</Tag> : <Tag color="red">Não</Tag>}
            </div>
          );
        }
      },
      {
        title: "Observação",
        dataIndex: "observacao"
      },
      {
        title: "Data",
        dataIndex: "created_at",
        render: (text, record) => {
          return <div>{moment(text).format("DD/MM/YYYY")}</div>;
        }
      },

      {
        title: "Ações",
        dataIndex: "acoes",
        render: (text, record) => {
          return (
            <div>
              <Popconfirm
                title="Deletar visita?"
                okText="Sim"
                cancelText="Cancelar"
                onConfirm={() => this.handleDelete(record.id)}
              >
                <Button
                  type="default"
                  shape="circle"
                  icon="delete"
                  size="default"
                />
              </Popconfirm>
            </div>
          );
        }
      }
    ];
  }

  componentDidMount = () => {
    this.getAllVisitas();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.code === 204 && this.state.isClicouButtonDelete) {
      notification.open({
        message: "Operação realizada com sucesso",
        description: "Visita removida com sucesso",
        icon: <Icon type="smile" style={{ color: colors.COR_PRYMARY }} />
      });
      this.setState({ isClicouButtonDelete: false });
    }
    if (!lodash.isEqual(this.props.list_apicultor, nextProps.intervencoesApiarios)) {
      const pagination = { ...this.state.pagination };

      pagination.total =
        nextProps.intervencoesApiarios && nextProps.intervencoesApiarios.total
          ? nextProps.intervencoesApiarios.total
          : 1;
      pagination.current =
        nextProps.intervencoesApiarios && nextProps.intervencoesApiarios.current_page
          ? nextProps.intervencoesApiarios.current_page
          : 1;
      pagination.pageSize =
        nextProps.intervencoesApiarios && nextProps.intervencoesApiarios.per_page
          ? nextProps.intervencoesApiarios.per_page
          : 1;

      this.setState({
        pagination
      });
    }
  }

  openModalIntervir = record => {
    this.setState({ colmeiaId: record.colmeia_id, modalVisible: true });
  };

  handleDelete = id => {
    this.props.deleteVisitaColmeia(id);
    this.setState({ isClicouButtonDelete: true });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.getAllVisitas({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };

  getAllVisitas = (params = {}) => {
    var currentPage =
      this.state.currentPage < this.state.pagination.last_page
        ? this.state.currentPage + 1
        : 1;
    var page =
      Object.keys({ ...params }).length === 0 ? currentPage : params.page;

    this.props.getAllApiariosIntervencoes(page);
    this.setState({ currentPage: page });
  };

  render() {
    const visitas = this.props.intervencoesApiarios || null;
    const { pagination, modalVisible, colmeiaId } = this.state;

    const columns = this.columns.map(col => {
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataindex: col.dataindex,
          title: col.title
        })
      };
    });

    const mapa = [
      {
        key: "/",
        name: " Home",
        icon: "home"
      },
      {
        key: "list",
        name: " Intervenções nos apiários",
        icon: "setting"
      }
    ];

    return (
      <Layout.Content style={{ margin: "0 16px" }}>
        <BreadcrumBee mapa={mapa} />

        <div
          style={{
            padding: 24,
            background: "#fff",
            minHeight: 360,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <Table
            columns={columns}
            dataSource={visitas.data}
            rowKey={record => record.id}
            pagination={pagination}
            loading={this.props.loadingVisita}
            onChange={this.handleTableChange}
            title={() => "Lista de de intervenções nos apiários"}
            footer={() => "Todos os resultados"}
            size="small"
            bordered
          />
        </div>
      </Layout.Content>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    intervencoesApiarios: state.intervencaoApiarioState.intervencoesApiarios,
    loadingVisita: state.intervencaoApiarioState.loadingVisita,
    code: state.intervencaoApiarioState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllApiariosIntervencoes }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(IntevencaoApiario);
