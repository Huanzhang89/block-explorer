import React from 'react'
import { Table, TableHeader, TableRow, TableCell, Text } from '@aragon/ui'
import Loader from 'react-loader'
import styled from 'styled-components'

import Block from '../Block'

const BlockList = ({blocks}) => {
  if (!blocks.length > 0) {
    return <Loader loaded={false}/>
  }
  return (
    <>
      <Table
        header={
          <TableRow>
            <TableHeader title="Latest 10 Blocks" />
          </TableRow>
        }
      >
        <StyledTableRow>
          <TableCell>
            <Text>Block Number</Text>
          </TableCell>
          <TableCell>
            <Text>Block Hash</Text>
          </TableCell>
          <TableCell>
            <Text>Difficulty</Text>
          </TableCell>
          <TableCell>
            <Text>No. of Tx</Text>
          </TableCell>
        </StyledTableRow>
        {blocks.map(block => (
          <Block key={block.number} data={block} />
        ))}
      </Table>
      
    </>
  )
}
  
const StyledTableRow = styled(TableRow)`
  font-weight: bold;
`

export default BlockList