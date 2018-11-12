import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getWeb3 from './api/web3'
import Provider from './GlobalState'
import * as serviceWorker from './serviceWorker';

window.addEventListener('load', async () => {
    //initiate web3 on window load
    getWeb3()
})

const MetaMaskWarning = () => (
  <div className="metamask-warning">
    Please Enable Metamask to Use this Dapp
  </div>
)
if (!window.web3) {
  ReactDOM.render(
    <MetaMaskWarning />,
    document.getElementById('root')  
  )
} else {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>, 
    document.getElementById('root')
  )
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
