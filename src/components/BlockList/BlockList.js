import React, { Component } from 'react'

import Block from '../Block'

export default class BlockList extends Component {
    render() {
        const { web3 } = this.props
        console.log(web3)
        let latestBlock = []
        web3.eth.getBlock("latest", true).then((res) => {
        console.log(res)
        latestBlock = res.transactions.map(transaction => {
            let value = transaction.value
            return web3.utils.fromWei(web3.utils.hexToNumberString(value))
        })

        })
        return <Block />
    }
}