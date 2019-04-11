import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';
import SidebarBee from '../../componentes/SidebarBee';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {
   Layout, Menu, Breadcrumb, Icon
} from 'antd';


class Dashboard extends Component {

   render() {
      return (
         <Layout style={{ minHeight: '100vh' }}>

            <SidebarBee />
            <Layout>
               <HeaderBee />

               <main>
                  <Switch>
                     <Route path="/sobre" component={() => <div>Sobre</div>} />
                  </Switch>
               </main>

               <FooterBee />
            </Layout>
         </Layout>
      );
   }
}
export default Dashboard;
