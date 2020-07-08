import React from 'react'
import { StyledText } from './Text.styled'

interface TextProps {
  children: string
  role?: string
  className: string
}

const Text: React.FC<TextProps> = (props) => {
  return <StyledText className={props.className}>{props.children}</StyledText>
}

export default Text
