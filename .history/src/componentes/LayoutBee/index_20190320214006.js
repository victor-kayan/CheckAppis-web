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
import {isAuthenticated} from '../../auth'/

class LayoutBee extends Component {



   render() {

      const PrivateRoute = ({ component: Component, ...rest }) => (
         <Route {...rest}
            render={props =>
               isAuthenticated() ? (
                  <Component {...props} />
               ) : (
                     <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                  )
            }
         />
      )

      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <SidebarBee history={this.props.history} />
            <Layout>
               <HeaderBee history={this.props.history} />

               <main>
                     <Switch>
                        <PrivateRoute path="/hello" component={() => "Hello"} />
                     </Switch>
               </main>
               {/* <ContentBee /> */}

               <FooterBee />
            </Layout>
         </Layout >
      );
   }
}

export default LayoutBee;