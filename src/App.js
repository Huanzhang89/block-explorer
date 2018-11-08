import React, { Component } from 'react';

import BlockList from './components/BlockList'

import './App.css';

class App extends Component {

  render() {
    if (!window.web3) {
      return 'Please enable Metamask'
    }
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
