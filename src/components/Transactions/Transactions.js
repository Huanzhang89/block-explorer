import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Table, TableHeader, TableRow, TableCell, Text } from '@aragon/ui'
import Loader from 'react-loader'
import styled from 'styled-components'

import Transaction from '../Transaction'
import Modal from '../Modal'
import Error from '../Error'

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
          {validTx.length > 0 ? 
            validTx.map(tx => (
              <Transaction key={tx.hash} data={tx} web3={web3} />
            )):
            <Error msg="Oops... none of the transactions are sending any ether!" />
          } 
        </Table>
      </Modal>
        
    )
}

const StyledTableRow = styled(TableRow)`
  font-weight: bold;
`

export default withRouter(Transactions)