import React from 'react'
import { TableRow, TableCell, Text } from '@aragon/ui'

const Transaction = ({data}) => (
  <TableRow>
    <TableCell>
      <Text>{data.from}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.to}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.value}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.gas}</Text>
    </TableCell>
  </TableRow>
)

export default Transaction