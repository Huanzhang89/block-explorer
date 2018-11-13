import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import getWeb3 from './api/web3'
import Error from './components/Error'
import * as serviceWorker from './serviceWorker';
import Routes from './routes'
window.addEventListener('load', async () => {
    //initiate web3 on window load
    getWeb3()
})

if (!window.web3) {
  ReactDOM.render(
    <Error msg='Please enable Metamask to use this app' />,
    document.getElementById('root')  
  )
} else {
  ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById('root')
  )
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
