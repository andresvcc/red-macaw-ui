
import styled from 'styled-components'
import { ReactNode, FC } from 'react'

export interface StyledTextButtonProps {
  children?: ReactNode,
  style?: Object,
  color?: 'primary' | 'secondary' | 'default',
  type?: 'text' | 'link' | 'default',
  textTransform?: 'first' | 'uppercase' | 'lowercase'
}

function SimpleButton({ children, color, type, ...props }: StyledTextButtonProps) {
  return (
      <button {...props}>
        {children}
      </button>
  )
}

const CommonBT = styled(SimpleButton)`
  gap: ${(props)=>props.theme.grid.container};
  display: inline-block;
  box-sizing: border-box;
  white-space: nowrap;
  padding-top: ${(props)=>props.theme.spacings.xxsmall};
  padding-bottom: ${(props)=>props.theme.spacings.xxsmall};
  padding-left: ${(props)=>props.theme.spacings.small};
  padding-right: ${(props)=>props.theme.spacings.small};
  line-height: 1.5715;

  font-weight: 400;
  text-align: center;
  cursor: pointer;
  user-select: none;

  font-size:  ;
  border-radius: 4px;

  transition: all .3s cubic-bezier(.645,.045,.355,1);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;

  text-transform: ${(props)=>props.textTransform};

  ${(props)=>props.textTransform === 'first' ? `
    &:first-letter {

      text-transform: uppercase;
    }
  ` : ''}
`

export const TextButton = styled(CommonBT)`
  color: ${(props)=>props.color ? props.theme.textColorsButton[props.color] : 'default'};
  background: #fff;
  border: solid 1px ${(props)=>props.color ? props.theme.textColorsButton[props.color] : 'default'};
  box-shadow: inset 0px 0px 8px -2px ${(props)=>props.color ? props.theme.textColorsButton[props.color] : 'default'}30;

  &:hover {
    box-shadow: 0px 0px 12px -2px ${(props)=>props.color ? props.theme.textColorsButton[props.color] : 'default'}30;
  }
`

export const DefaultButton = styled(CommonBT)`
  color: white;
  background: linear-gradient(
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.1)
  ), ${(props)=>props.color ? props.theme.defaultColorsButton[props.color] : 'default'};
  border: none;

  &:hover {

    background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1)
    ), ${(props)=>props.color ? props.theme.defaultColorsButton[props.color] : 'default'};
    box-shadow: 0px 0px 16px -2px ${(props)=>props.color ? props.theme.defaultColorsButton[props.color] : 'default'}50;
  }
`
export const LinkButton = styled(CommonBT)`
  color: ${(props)=>props.color ? props.theme.textColorsButton[props.color] : 'default'};
  background: transparent;
  border: none;

  &:hover {
    color: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1)
    ), ${(props)=>props.color ? props.theme.defaultColorsButton[props.color] : 'default'};
    text-decoration: underline ${(props)=>props.color ? props.theme.defaultColorsButton[props.color] : 'default'};
  }
`
