import React, { Component } from 'react';
import { AragonApp } from '@aragon/ui'
import { Route } from 'react-router-dom'

import GetLatestBlocks from './components/GetLatestBlocks'
import BlockList from './components/BlockList'
import Transactions from './components/Transactions'


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
            {({ latestBlocks, web3 }) => (
              <>
                <BlockList blocks={latestBlocks} />
                <Route
                  path="/:blockNumber"
                  render={() => (
                    <Transactions web3={web3} data={latestBlocks} />
                  )}
                />
                
              </>
            )}
          </GetLatestBlocks>
        </div>
      </AragonApp>
    );
  }
}

export default App;
