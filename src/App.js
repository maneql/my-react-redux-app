import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"

function App(props) {
  return (
    <div className="App">
    <Demo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Count: {props.count}</div>
        <button onClick={() => props.increaseCounter()}>Increase Count</button>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
