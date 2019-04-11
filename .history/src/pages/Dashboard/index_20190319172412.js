import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
   Layout, Menu, Breadcrumb, Icon,
} from 'antd';

class Dashboard extends Component {

   componentDidMount() {
      localStorage.removeItem('token');
   }

   render() {

      const {
         Header, Content, Footer, Sider,
      } = Layout;
      const SubMenu = Menu.SubMenu;
      
      return (
         <div>
            <Layout>
               <Sider>Sider</Sider>
               <Layout>
                  <Header>Header</Header>
                  <Content>Content</Content>
                  <Footer>Footer</Footer>
               </Layout>
            </Layout>
         </div>
      );
   }
}
export default Dashboard;