import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';
import SidebarBee from '../../componentes/SidebarBee';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {
   Layout, Menu, Breadcrumb, Icon
} from 'antd';
import ContentBee from '../../componentes/ContentBee';


class Dashboard extends Component {

   render() {
      return (
         <Layout style={{ minHeight: '100vh' }}>

            <SidebarBee />

            <Layout>
               <HeaderBee />

               <main>
                  <Switch>
                     <Route exact path="/" component={() => <div>Teste1</div>} />
                     <Route path="/sobre" component={() => <div>Teste2</div>} />
                     <Route path="/contato" component={ContentBee} />
                  </Switch>
               </main>
               <ContentBee />

               <FooterBee />
            </Layout>
         </Layout>
      );
   }
}
export default Dashboard;
