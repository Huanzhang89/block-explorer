import React, { createContext, Component } from 'react'
import getWeb3 from './api/web3'


const GlobalContext = createContext({})

export const GlobalConsumer = GlobalContext.Consumer

class Provider extends Component {
  state = {
    web3: undefined
  }

  async componentDidMount() {
    const web3 = await getWeb3()
    this.setState({ web3 })
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
            web3: this.state.web3
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default Provider