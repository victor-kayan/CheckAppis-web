import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> claudio.
          </p>
          <button onClick={this.onChange}>Clique</button>

          <p>
            {this.state.nome}
          </p>

          <Login />

          <Button type="primary" onClick={this.onClear}>{this.state.textButtom}</Button>

          <Button type="primary">Primary</Button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
                </a>
        </header>
      </div>
    );
  }
}

export default App;
