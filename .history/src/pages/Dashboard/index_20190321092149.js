import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
   Layout, Table
} from 'antd';
import SidebarBee from '../../componentes/SidebarBee';
import HeaderBee from '../../componentes/HeaderBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component {

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>

            <SidebarBee />

            <Layout>
               <HeaderBee history={this.props.history} />

              
               <FooterBee />
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;