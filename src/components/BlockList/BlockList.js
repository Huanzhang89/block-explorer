import React from 'react'
import Block from '../Block'

import { GlobalConsumer } from '../../GlobalState'

const BlockList = () => (
    <GlobalConsumer>
        {({ web3 }) => {
            if (!web3) {
                return 'Loading'
            }
            console.log(web3)
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
            }}
    </GlobalConsumer>
)

export default BlockList