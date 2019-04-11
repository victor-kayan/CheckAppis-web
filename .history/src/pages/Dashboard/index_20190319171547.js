import React, { Component } from 'react';

class Dashboard extends Component {

   componentDidMount() {
      localStorage.removeItem('token');
   }

   render() {
      return (
         <div>
            <h1>Hello world</h1>
         </div>
      );
   }
}
export default Dashboard;