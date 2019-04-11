import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/userActions';

class Dashboard extends Component {

   render() {
      return (
         <LayoutBee />
      );
   }
}
export default Dashboard;


function mapStateToProps(state, props) {
   return {
       loading: state.userState.loading,
       logged: state.userState.logged,
       token: state.userState.token,
       codeErro: state.userState.codeErro
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ login }, dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WrappedNormalLoginForm);
