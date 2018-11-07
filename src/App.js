import React, { Component } from 'react';
import Web3 from 'web3';

import BlockList from './components/BlockList'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Block Explorer</h2>
        </header>

        <BlockList />
      </div>
    );
  }
}

export default App;
