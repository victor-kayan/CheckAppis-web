import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
   Layout, Table
} from 'antd';
import HeaderBee from '../../componentes/HeaderBee';
import SidebarBee from '../../componentes/SidebarBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';
import TableBee from '../../componentes/TableBee';

class Dashboard extends Component {

   render() {
      console.log("2112121", this.props);

      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <SidebarBee />
            <Layout>
               <HeaderBee history={this.props.history} />
               <ContentBee table={<TableBee />}/>
               <FooterBee  />
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;