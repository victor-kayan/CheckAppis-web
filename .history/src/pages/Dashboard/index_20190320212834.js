import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import Login from '../Login';
import HeaderBee from '../../componentes/HeaderBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';

class Dashboard extends Component {

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            {/* <SidebarBee history={this.props.history} />
               <Layout> */}
            <HeaderBee />

            <main>
               <BrowserRouter>
                  <Switch>
                     <Route exact path="/hello" component={() => <div>Hello</div>} />
                  </Switch>
               </BrowserRouter>
            </main>
            <ContentBee />

            <FooterBee />
         </Layout>
      );
   }
}

export default Dashboard;
