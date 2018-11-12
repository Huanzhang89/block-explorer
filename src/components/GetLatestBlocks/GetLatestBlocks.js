import React, { Component } from 'react'
import getWeb3 from '../../api/web3'
export default class GetLatestBlocks extends Component {

  state = {
    latestBlocks: []
  }
  async componentDidMount() {
    const web3 = await getWeb3()
    web3.eth.getBlockNumber().then( (res) => {
      this.getLatestBlocks(res, this.props.numOfBlocks, web3).then(results => {
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
    return this.props.children({
      latestBlocks: this.state.latestBlocks
    })
  }
}