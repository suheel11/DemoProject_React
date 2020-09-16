import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Aux from './components/hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux className="App">
          <Layout />
      </Aux>
    );
  }
}

export default App;
