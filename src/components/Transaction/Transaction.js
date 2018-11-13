import React from 'react'
import { TableRow, TableCell, Text } from '@aragon/ui'

const Transaction = ({data, web3}) => (
  <TableRow>
    <TableCell>
      <BlankLink href={`${etherscanRoot}${data.from}`}>
        <Text>{data.from}</Text>
      </BlankLink>
    </TableCell>
    <TableCell>
      <BlankLink href={`${etherscanRoot}${data.to}`}>
        <Text>{data.to}</Text>
      </BlankLink>
    </TableCell>
    <TableCell>
      <Text>{web3.utils.fromWei(data.value, 'ether')}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.gas}</Text>
    </TableCell>
  </TableRow>
)
const etherscanRoot = 'https://etherscan.io/address/'
const BlankLink = ({href, children}) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

export default Transaction