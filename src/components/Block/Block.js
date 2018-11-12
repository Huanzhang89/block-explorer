import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to={`${data.number}`}>
        <Text>{data.transactions.length}</Text>
      </Link>
    </TableCell>
  </TableRow>
)

export default Block