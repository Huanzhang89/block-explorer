import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';

class App extends Component {
  render() {
    var web3 = new Web3(Web3.givenProvider)
    console.log(web3)
    web3.eth.getBlock("latest", true).then((res) => {
      console.log(res)
      res.transactions.forEach(transaction => {
        let value = transaction.value
        console.log(web3.utils.fromWei(web3.utils.hexToNumberString(value)))
      })

    })
    return (
      <div className="App">
        <header className="App-header">
          <h2>Block Explorer</h2>
        </header>
      </div>
    );
  }
}

export default App;
