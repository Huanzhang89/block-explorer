import React from 'react'
import Block from '../Block'

const BlockList = ({blocks}) => (
  <>
    {console.log(blocks)}
    {blocks.length > 0 ? JSON.stringify(blocks) : 'loading...'}
  </>
)

export default BlockList