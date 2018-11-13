import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { TableRow, TableCell, Text } from '@aragon/ui'

const Block = ({data, history}) => (
  <StyledTableRow onClick={() => history.push(`/${data.number}`)} >
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
  </StyledTableRow>
)

const StyledTableRow = styled(TableRow)`
  cursor: pointer;
`

export default withRouter(Block)