import React, { Component } from 'react';

import LayoutBee from '../../componentes/LayoutBee';
import Login from '../Login';

class Dashboard extends Component {

   render() {
      return (
            <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
               {/* <SidebarBee history={this.props.history} />
               <Layout> */}
                  <HeaderBee />
   
                  {/* <main>
                     <BrowserRouter>
                        <Switch>
                           <Route exact path="/login" component={ContentBee} />
                        </Switch>
                     </BrowserRouter>
                  </main> */}
                  <ContentBee />
   
                  <FooterBee />
               </Layout>
            </Layout >
      );
   }
}

export default Dashboard;
