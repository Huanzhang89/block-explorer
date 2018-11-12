import React from 'react'
import { Table, TableHeader, TableRow, TableCell, Text } from '@aragon/ui'
import Loader from 'react-loader'

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
        <TableRow className="table-row">
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
        </TableRow>
        {blocks.map(block => (
          <Block key={block.number} data={block} />
        ))}
      </Table>
      
    </>
  )
}
  

export default BlockList