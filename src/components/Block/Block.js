import React from 'react'
import { TableRow, TableCell, Text } from '@aragon/ui'

const Block = ({data}) => (
  <TableRow>
    <TableCell>
      <Text>{data.number}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.hash}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.difficulty}</Text>
    </TableCell>
    <TableCell>
      <Text>{data.transactions.length}</Text>
    </TableCell>
  </TableRow>
)

export default Block