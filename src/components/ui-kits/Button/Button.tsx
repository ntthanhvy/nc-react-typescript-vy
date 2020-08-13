import React from 'react'
import { StyledButton } from './Button.styled'

interface ButtonProps {
  children: React.ReactChild
  onClick?(e: React.MouseEvent<HTMLElement>): void
  className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton className={props.className} onClick={props.onClick}>{props.children}</StyledButton>
}

export default Button
