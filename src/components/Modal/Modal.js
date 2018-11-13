import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Modal = ({ children, close }) => {
  return (
    <ModalMask onClick={e => console.log(e.target)}>
      <OutsideModalContent handleClickOutside={close}>
        {children}
      </OutsideModalContent> 
    </ModalMask>
  )
}

const StyledModal = styled(Modal)`
`
const ModalContent = styled('div')`
  background: #F7FBFD;
  height: 90%;
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px #000 solid;
  transform: translate(-50%, -50%);
  overflow-y: auto;
`

const OutsideModalContent = onClickOutside(ModalContent)

const ModalMask = styled('div')`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(211, 211, 211, 0.9);
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 6;
  animation: fade-in 400ms normal forwards ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default StyledModal
