import React from 'react'
import styled from 'styled-components'

const Error =  ({ msg }) => (
  <StyledError>
    {msg}
  </StyledError>
)

const StyledError = styled('div')`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Error