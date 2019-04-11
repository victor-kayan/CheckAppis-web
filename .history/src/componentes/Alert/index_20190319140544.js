
// import React from 'react';
// import 'antd/dist/antd.css';
// import { Alert } from 'antd';

// class AlertComponent extends React.Component {

//     constructor(props) {
//         super(props); 
//         this.state = {
//             visible: props.visible
//         };
//         this.handleClose = this.handleClose.bind(this);
        
//     }
   
//     handleClose = () => {
//         this.setState({ visible: false });
//     }

//     render() {
//         return (
//             <div  >
//                 {
//                     props.visible ? (
//                         <Alert
//                             message='Alert de erro'
//                             type='success'
//                             closable
//                             afterClose={this.handleClose}
//                         />
//                     ) : null
//                 }
//             </div>
//         );
//     }
// }

// const  AlertComponent = (props) => {
//     return <p>The count is { props.currentCount }</p>;
//   };

// export default AlertComponent;
