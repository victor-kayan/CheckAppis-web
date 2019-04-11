import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// // import { clickButton, clickButton2, clickButton3 } from './redux/actions';
import './App.css';
import Routes from './routes';
class App extends Component {

  state = {
    inputValue: '',
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  // async teste() {
  //   alert('Aqui')
  //   Api.post('/login', {
  //     email: 'apicultor@gmail.com',
  //     password: '123456',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //     }
  //   }
  //   )
  //     .then(response => {
  //       console.log(response.status);

  //       // dispatch({
  //       //     type: LOGIN,
  //       //     payload: {
  //       //         loading: false,
  //       //         logged: true,
  //       //         token: response.data.token
  //       //     }
  //       // });
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //       }
  //       // dispatch({
  //       //     type: LOADING,
  //       //     payload: {
  //       //         logged: false,
  //       //         loading: false
  //       //     }
  //       // });
  //       // throw error;
  //     });
  // }


  render() {

    // const {
    //   clickButton,
    //   clickButton2,
    //   clickButton3,
    //   newValue,
    //   newValue2
    // } = this.props;

    // const { inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>

        {/* <input
          onChange={this.inputChange}
          type='text'
          value={inputValue}
        />

        <button onClick={() => clickButton(inputValue)}>
          Clicar
        </button>

        <button onClick={() => clickButton2(inputValue)}>
          Limpar
        </button>

        <button onClick={() => clickButton3(inputValue)}>
          Escrever meu nome
        </button>

        <h1>{newValue}</h1>
        <h4>{newValue2}</h4> */}
{/* 
        <button onClick={}>
          Escrever meu nome
        </button> */}


        <Routes />

      </div>
    );
  }
}

// // const mapStateToProps = store => ({
// //   newValue: store.clickState.newValue,
// //   newValue2: store.clickState.newValue2
// // });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ clickButton, clickButton2, clickButton3 }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
