import React from 'react'

import { StyledCartItems } from './Cart.styled'

interface ICart {
  productId: string
  quantity: number
  key: string
}

const Cart: React.FC<ICart> = ({ productId, quantity, key }) => {

  return (
    <StyledCartItems key={key}>
      <span>{productId}</span>
      <span>{quantity}</span>
    </StyledCartItems>
  )
}

export default Cart
