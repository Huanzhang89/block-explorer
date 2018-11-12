import React, { Component } from 'react';
import { AragonApp } from '@aragon/ui'

import GetLatestBlocks from './components/GetLatestBlocks'
import BlockList from './components/BlockList'


import './App.css';

class App extends Component {

  render() {
    return (
      <AragonApp publicUrl="/aragon-ui-assets/">
        <div className="App">
          <header className="App-header">
            <h2>Block Explorer</h2>
          </header>
          <GetLatestBlocks numOfBlocks={10}>
            {({ latestBlocks }) => (
              <BlockList blocks={latestBlocks} />        
            )}
          </GetLatestBlocks>
        </div>
      </AragonApp>
    );
  }
}

export default App;
