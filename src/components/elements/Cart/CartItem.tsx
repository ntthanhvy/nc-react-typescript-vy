import React from 'react'

import {
  StyledCartItem,
  StyledCartItemName,
  StyledCartItemPrice,
  StyledCartItemQuantity,
  RemoveCartItem,
} from './Cart.styled'
import { formatter } from '../../../common/numberFormatter'

export interface ICartItem {
  productId: string
  quantity: number
  name?: string
  price?: number
  remove?: () => void
}

const CartItem: React.FC<ICartItem> = ({ name, price, productId, quantity, remove }) => {
  return (
    <StyledCartItem key={productId}>
      <StyledCartItemName>{name}</StyledCartItemName>
      <StyledCartItemPrice>{formatter.format(price)}</StyledCartItemPrice>
      <StyledCartItemQuantity>{quantity}</StyledCartItemQuantity>
      <RemoveCartItem onClick={remove}>X</RemoveCartItem>
    </StyledCartItem>
  )
}

export default CartItem
