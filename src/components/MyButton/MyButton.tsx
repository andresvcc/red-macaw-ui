import React, { ReactNode } from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  color: red;
  &:hover {
    background-color: #0a558c;
  }
`
export interface StyledButtonProps {
  label?: string
  children?: ReactNode
}

const MyButton = (props: StyledButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>
}

export default MyButton
