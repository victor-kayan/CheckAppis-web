import React, { Component } from 'react';
import { Layout } from 'antd';

class Dashboard extends Component {

   componentDidMount() {
      localStorage.removeItem('token');
   }

   render() {
      
      const {
         Header, Footer, Sider, Content,
      } = Layout;

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