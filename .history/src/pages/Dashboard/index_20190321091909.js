import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
   Layout, Table, Switch
} from 'antd';
import SidebarBee from '../../componentes/SidebarBee';
import HeaderBee from '../../componentes/HeaderBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';

class Dashboard extends Component {

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>

            <SidebarBee />

            <Layout>
               <HeaderBee history={this.props.history} />

               <main>
                  <Switch>
                     <Route path="/sobre" component={() => <div>Sobre</div>} />
                  </Switch>
               </main>
               {/* <ContentBee  table={<TableBee />}/> */}
               <FooterBee />
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;