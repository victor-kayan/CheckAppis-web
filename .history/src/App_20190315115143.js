import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';

class App extends Component {

  state = {
    nome: '',
    textButtom: ''
  }

  onChange = () => {
    this.setState({ nome: 'claudio', textButtom: 'Limpar' })
  }

  onClear = () => {
    this.setState({ nome: '', textButtom: '' })
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
