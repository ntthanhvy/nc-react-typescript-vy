import React from 'react'

import { FaPlusCircle } from 'react-icons/fa'
import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledCardButtonGroup,
  StyledCardButton,
  CardOverlay,
} from './Card.styled'

import { Text } from '../Text'

interface CardProps {
  children: React.ReactNode
  onClick?(e: any): void
  buttonGroups?: React.ReactNode
  imageURL: string
  blockView?: boolean
  listView?: boolean
  buttonAdd?: React.ReactNode
  product_name: string
}

const Card: React.FC<CardProps> = (props) => {
  const { blockView, listView, product_name } = props

  return (
    <StyledCard blockView={blockView} listView={listView}>
      <StyledCardImage blockView={blockView} listView={listView}>
        <img src={props.imageURL} />
      </StyledCardImage>
      {props.blockView && (
        <CardOverlay className="overlay">
          <span>{props.product_name}</span>
          {props.buttonGroups && (
            <StyledCardButtonGroup blockView={blockView} listView={listView}>
              {props.buttonGroups}
            </StyledCardButtonGroup>
          )}
        </CardOverlay>
      )}
      {props.listView && (
        <StyledCardBody>
          {props.children}
          {props.buttonGroups && (
            <StyledCardButtonGroup blockView={blockView} listView={listView}>
              {props.buttonGroups}
            </StyledCardButtonGroup>
          )}
        </StyledCardBody>
      )}
    </StyledCard>
  )
}

export default Card
