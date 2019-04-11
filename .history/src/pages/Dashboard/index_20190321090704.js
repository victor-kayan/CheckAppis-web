import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
   Layout, Table, Switch
} from 'antd';
import SidebarBee from '../../componentes/SidebarBee';
import HeaderBee from '../../componentes/HeaderBee';
import ContentBee from '../../componentes/ContentBee';
import FooterBee from '../../componentes/FooterBee';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

const links = [
   { route: "/", label: "Home" },
   { route: "/about", label: "Sobre" },
   { route: "/blog", label: "Blog" },
   { route: "/contact", label: "Contato" },
];

class Dashboard extends Component {

   renderLink = () => {
      return links.map(link =>
         <Link key={link.route} className="nav-link" to={link.route}>
            {link.label}
         </Link>
      )
   }

   render() {
      return (
         <Layout theme="default" style={{ minHeight: '100vh', textAlign: 'justify' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                     {this.renderLink()}
                  </ul>
               </div>
            </nav>
         </Layout>
      );
   }
}

export default Dashboard;