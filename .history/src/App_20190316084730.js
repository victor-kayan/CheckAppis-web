import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, clickButton2 } from './redux/actions';
import './App.css';
class App extends Component {
  
  state = {
    inputValue: '',
    inputValue2: 'C'
  }
  
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

    const {
      clickButton,
      newValue,
      newValue2
    } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>

        <input
          onChange={this.inputChange}
          type='text'
          value={inputValue}
        />

        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>

        <button onClick={() => clickButton2(inputValue2)}>
          Click me 2!
        </button>

        <h1>{newValue}</h1>
        <h4>{newValue2}</h4>

      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue2: store.clickState.newValue2
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, clickButton2}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
