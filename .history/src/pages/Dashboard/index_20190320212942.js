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


class Dashboard extends Component {

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            {/* <SidebarBee history={this.props.history} />
               <Layout> */}
            <HeaderBee />

            <main>
                  <Switch>
                     <Route exact path="/hello" component={() => <div>Hello</div>} />
                  </Switch>
            </main>
            <ContentBee />

            <FooterBee />
         </Layout>
      );
   }
}

export default Dashboard;
