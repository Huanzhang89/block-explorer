import React, { Component } from 'react';
import Web3 from 'web3';

import BlockList from './components/BlockList'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.web3 = new Web3(Web3.givenProvider)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Block Explorer</h2>
        </header>

        <BlockList web3={this.web3}/>
      </div>
    );
  }
}

export default App;