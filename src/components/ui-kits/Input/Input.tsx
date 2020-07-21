import React from 'react'
import { StyledInput } from './Input.styled'

interface IInputProps {
  className?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e) => void
  onFinish?: (e) => void
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <StyledInput
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      onFinish={props.onFinish}
      placeholder={props.placeholder}
      className={props.className}
    />
  )
}

export default Input
