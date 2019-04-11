import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  state = {
    nome: ''
  }

  onChange = () => {
     this.setState({nome: 'claudio'})
  }

  onClear = () => {
    this.setState({nome: ''})
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
