import React from 'react'
import Router from 'next/router'
import { FaPlusCircle } from 'react-icons/fa'
import {
  StyledCard,
  StyledCardImage,
  StyledCardBody,
  StyledCardButtonGroup,
  StyledImg,
  CardOverlay,
  StyledCardText,
} from './Card.styled'
import { IProduct } from '../../../pages/product/[id]'
import { formatter } from '../../../common/numberFormatter'

interface CardProps {
  children?: React.ReactNode
  onClick?(e: any): void
  buttonGroups?: React.ReactNode
  imageURL: string
  blockView?: boolean
  buttonAdd?: React.ReactNode
  product?: IProduct
}

const Card: React.FC<CardProps> = (props) => {
  const { blockView } = props

  const goToProduct = () => {
    const id = props.product.id
    console.log(id)
    Router.push(`/product/${id}`)
  }

  return (
    <StyledCard blockView={blockView}>
      <StyledCardImage blockView={blockView}>
        <StyledImg src={props.imageURL} />
      </StyledCardImage>
      {props.blockView ? (
        <CardOverlay className="overlay">
          <StyledCardText type="name" onClick={goToProduct}>
            {props.product.name.slice(0, 60)} {props.product.name.length >= 60 && '...'}
          </StyledCardText>
          <StyledCardText type="price">{formatter.format(props.product.price)}</StyledCardText>
          {props.buttonGroups && (
            <StyledCardButtonGroup blockView={blockView}>
              {props.buttonGroups}
            </StyledCardButtonGroup>
          )}
        </CardOverlay>
      ) : (
        <StyledCardBody>
          <StyledCardText onClick={goToProduct} type="name">
            {props.product.name}
          </StyledCardText>
          <StyledCardText type="price">{formatter.format(props.product.price)}</StyledCardText>
          {props.buttonGroups && (
            <StyledCardButtonGroup blockView={blockView}>
              {props.buttonGroups}
            </StyledCardButtonGroup>
          )}
        </StyledCardBody>
      )}
    </StyledCard>
  )
}

export default Card
