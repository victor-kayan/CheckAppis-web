import React from 'react';
import { Modal, Button, Form, Input, Icon, Row, Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveApiario, cidades } from '../../../../../redux/actions/apiarioActions';
import AlertComponent from '../../../../../componentes/Alert';

class ModalNovoApiario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      endereco: '',
      cidade: '',
      estado: '',
      selected: true,
      cidades: null
    };

    this.handleCancel = this.handleCancel.bind(this);
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.buttonClicou) {
      if (nextProps.code === 201) {
        this.setState({
          message: 'Apiário criado com sucesso', typeAlert: 'success',
          buttonClicou: false
        });
        this.refs.alert.openAlert();
      } else if (nextProps.code < 200 || nextProps.code >= 300) {
        this.setState({
          message: 'Infelizmente houve algum problema',
          buttonClicou: false, typeAlert: 'error'
        });
        this.refs.alert.openAlert();
      }
    }
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loadingButton: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ buttonClicou: true });
        this.props.saveApiario({ nome: values.nome, endereco: values.endereco });
      }
    });
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("cidades", nextProps.cidades)
  }

  handleChange = (value) => {
    this.setState({ selected: true });
    this.props.cidades(value);
  }

  render() {
    const { visible, onClose } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { alertVisible, message, buttonClicou, typeAlert, selected } = this.state;
    const Option = Select.Option;

    console.log('Valor do select ', selected)

    return (
      <div>
        <Modal
          iconType='user'
          visible={visible}
          title="Novo usuário"
          onOk={() => this.setModalVisible(false)}
          onCancel={this.props.onCancel}
          footer={[
            <Button key="back" onClick={onClose}>Cancelar</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleSubmit}>
              Salvar
            </Button>,
          ]}
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >

          <AlertComponent ref={'alert'} visible={alertVisible} onClose={() => this.setState({ alertVisible: false })}
            clicou={buttonClicou} type={typeAlert} message={message} />

          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              label="Nome do apiário"
            >
              {getFieldDecorator('nome', {
                rules: [{
                  required: true, message: 'Por favor insira o nome do apiário',
                }],
              })(
                <Input prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nome" />
              )}
            </Form.Item>

            <Row>
              <Form.Item
                label="Estado"
              >
                {getFieldDecorator('nome', {
                  rules: [{
                    required: true, message: 'Por favor insira o nome do apiário',
                  }],
                })(
                  <Select
                    showSearch
                    placeholder="Selecione o estado"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="RN">Rio Grande do Norte</Option>
                    <Option value="RJ">Rio de Janeiro</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item
                label="Cidade"
              >
                {getFieldDecorator('cidade_id', {
                  rules: [{
                    required: true, message: 'Por selecione a cidades',
                  }],
                })(
                  <Select
                    showSearch
                    style={{ width: '100%', marginRight: 3 }}
                    placeholder="Selecione a cidade"
                    optionFilterProp="children"
                    disabled={true}
                    onChange={this.handleChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                )}
              </Form.Item>
            </Row>

            <Form.Item
              label="Endereco"
            >
              {getFieldDecorator('password_confirmation', {
                rules: [{
                  required: true, message: 'Por favor informe o endereço!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="Endereço" onBlur={this.handleConfirmBlur} type="text" placeholder="Endereço" />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(ModalNovoApiario);

function mapStateToProps(state, props) {
  return {
    list_apiario: state.apicultorState.list_apiario,
    loading: state.apiarioState.loading,
    code: state.apiarioState.code
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveApiario , cidades}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);

