import React, { Component } from 'react'

import getWeb3 from '../../api/web3'
import Block from '../Block'


export default class BlockList extends Component {
    state = {
        web3: undefined,
    }

    async componentDidMount() {
        const web3 = await getWeb3()
        this.setState({ web3 })
    }
    
    render() {
        const { web3 } = this.state
        console.log(web3)
        console.log(getWeb3())
        if (!web3) {
            return 'Loading'
        }
        let latestBlock = []
        web3.eth.getBlock("latest", true).then((res) => {
            console.log(res)
            latestBlock = res.transactions.filter(transaction => {
                console.log(Number(transaction.value))
                return Number(transaction.value) > 0
            })
            console.log(latestBlock)

        })
        return <Block />
    }
}