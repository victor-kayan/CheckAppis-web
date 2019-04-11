import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';
import SidebarBee from '../../componentes/SidebarBee';
import { Switch, Route} from 'react-router-dom';

import {
   Layout
} from 'antd';
import ContentBee from '../../componentes/ContentBee';
import ListApicultor from './subpages/Apicultor/ListApicultor';


class Dashboard extends Component {

   render() {
      return (
        
        <Layout style={{ minHeight: '100vh' }}>

            {/* INIT SIDEBAR */}
            <SidebarBee />
            {/* END SIDEBAR */}

            <Layout>

               {/* INIT HEADER */}
               <HeaderBee  history={this.props.history} />
               {/* END HEADER */}

               {/* INIT CONTENT */}
               <main>
                  <Switch>
                     <Route exact path="/apicultores/list" component={ListApicultor} />
                     <Route path="/sobre" component={() => <div>Teste2</div>} />
                     <Route path="/contato" component={ContentBee} />
                  </Switch>
               </main>
               {/* END CONTENT */}

               {/* INIT FOOTER */}
               <FooterBee />
               {/* END FOOTER */}
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;
