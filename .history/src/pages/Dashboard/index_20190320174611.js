import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';

class Dashboard extends Component {

   render() {
      return (
         <LayoutBee {...this.props} />
      );
   }
}
export default Dashboard;