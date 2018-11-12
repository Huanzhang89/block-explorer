import React, { Component } from 'react';
import { AragonApp } from '@aragon/ui'
import Loader from 'react-loader'

import BlockList from './components/BlockList'
import getWeb3 from './api/web3'
import { GlobalConsumer } from './GlobalState'

import './App.css';

class App extends Component {
  state = {
    latestBlocks: []
  }

  async componentDidMount() {
    const web3 = await getWeb3()
    web3.eth.getBlockNumber().then( (res) => {
      this.getLatestBlocks(res, 10, web3).then(results => {
        this.setState({
          latestBlocks: results
        })
      }).catch( err => {
        console.log(err)
      })
    })
  }
  getLatestBlocks = async (latest, numOfBlocks, web3) => {
    const batch = new web3.eth.BatchRequest()
    const promises = []
    for (let i = latest; i > latest - numOfBlocks; i -= 1 ) {
      promises.push(new Promise((resolve, reject) => {
        batch.add(web3.eth.getBlock.request(i, true, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        }))
      }))
    }
    
    batch.execute()
    return Promise.all(promises)
  }

  render() {
    return (
      <AragonApp publicUrl="/aragon-ui-assets/">
        <div className="App">
          <header className="App-header">
            <h2>Block Explorer</h2>
          </header>

          <GlobalConsumer>
            {({ web3 }) => {
              if (!web3) {
                  return <Loader loaded='false'/>
              }
              return <BlockList blocks={this.state.latestBlocks} />    
            }}
          </GlobalConsumer>
          
        </div>
      </AragonApp>
    );
  }
}

export default App;
