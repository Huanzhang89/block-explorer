import React from 'react'
import { TableRow, TableCell, Text } from '@aragon/ui'

const Transaction = ({data, web3}) => (
  <TableRow>
    <TableCell>
      <Text>{data.from}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.to}</Text>
    </TableCell>
    <TableCell>
      <Text>{web3.utils.fromWei(data.value, 'ether')}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.gas}</Text>
    </TableCell>
  </TableRow>
)

export default Transaction