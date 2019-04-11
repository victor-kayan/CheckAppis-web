import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class App extends Component {

  state = {
    nome: '',
    textButtom: ''
  }

  onChange = () => {
     this.setState({nome: 'claudio', textButtom: 'Limpar'})
  }

  onClear = () => {
    this.setState({nome: '', textButtom: ''})
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

          <button onClick={this.onClear}>{this.state.textButtom}</button>

          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>

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
