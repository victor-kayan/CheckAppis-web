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

class Dashboard extends Component {

   render() {

      const columns = [{
         title: 'Name',
         dataIndex: 'name',
         render: text => <a href="javascript:;">{text}</a>,
      }, {
         title: 'Cash Assets',
         className: 'column-money',
         dataIndex: 'money',
      }, {
         title: 'Address',
         dataIndex: 'address',
      }];

      const data = [{
         key: '1',
         name: 'John Brown',
         money: '￥300,000.00',
         address: 'New York No. 1 Lake Park',
      }, {
         key: '2',
         name: 'Jim Green',
         money: '￥1,256,000.00',
         address: 'London No. 1 Lake Park',
      }, {
         key: '3',
         name: 'Joe Black',
         money: '￥120,000.00',
         address: 'Sidney No. 1 Lake Park',
      }];

      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <SidebarBee />
            <Layout>
               <HeaderBee />
               <ContentBee />
               <FooterBee conteudo={<TableBee />} />
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;