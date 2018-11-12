import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Table, TableHeader, TableRow, TableCell, Text } from '@aragon/ui'
import Loader from 'react-loader'
import Transaction from '../Transaction'

import styled from 'styled-components'

import Modal from '../Modal'
const Transactions = ({data , match, history, web3}) => {
    const blockData = data.filter(block => block.number === Number(match.params.blockNumber))[0]
    const validTx = blockData && blockData.transactions.filter(transaction => transaction.value !== '0')
    if (!data.length > 0) {
      return <Loader loaded={false} />
    }
    // redirect if the request block data is no longer available
    if (data && !blockData) {
      return <Redirect to='/' />
    }
    return(
      <Modal close={() => history.goBack()}>
        <Table
          header={
            <StyledTableRow>
              <TableHeader title={`Transactions for block ${blockData.number}`} />
            </StyledTableRow>
          }
        >
          <StyledTableRow>
            <TableCell>
              <Text>From</Text>
            </TableCell>
            <TableCell>
              <Text>To</Text>
            </TableCell>
            <TableCell>
              <Text>Value in Ether</Text>
            </TableCell>
            <TableCell>
              <Text>Gas used</Text>
            </TableCell>
          </StyledTableRow>
          {validTx.map(tx => (
            <Transaction key={tx.hash} data={tx} web3={web3} />
          ))}
        </Table>
      </Modal>
        
    )
}

const StyledTableRow = styled(TableRow)`
  font-weight: bold;
`

export default withRouter(Transactions)