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
import { Router, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class LayoutBee extends Component {

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <SidebarBee />
            <Layout>
               <HeaderBee history={this.props.history} />

               <main>
                  <BrowserRouter>
                     <Switch>
                        <Route exact path="/login" component={ContentBee} />
                     </Switch>
                  </BrowserRouter>
               </main>

               <FooterBee />
            </Layout>
         </Layout >
      );
   }
}

export default LayoutBee;