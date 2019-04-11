import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import Login from '../Login';
import HeaderBee from '../../componentes/HeaderBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';
import {
   Layout, Menu, Icon, Avatar
} from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Routes from '../../routes';


class Dashboard extends Component {

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            {/* <SidebarBee history={this.props.history} />
               <Layout> */}
            <HeaderBee />

            <main>
                  <Switch>
                     <h1>Hello</h1>
                  </Switch>
            </main>
            <ContentBee />

            <FooterBee />
         </Layout>
      );
   }
}

export default Dashboard;
