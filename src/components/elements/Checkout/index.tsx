import React from 'react'
import {
  StyledCheckout,
  StyledCheckoutTitle,
  StyledCheckoutBody,
  StyledCheckoutBtn,
} from './Checkout.styled'
import Cart from '../Cart'
import { ICartItem } from '../Cart/CartItem'

export interface ICheckout {
  cart? : ICartItem[]
}

const Checkout = ({ cart }) => {
  return (
    <StyledCheckout>
      <StyledCheckoutTitle>Checkout Cart:</StyledCheckoutTitle>
      <StyledCheckoutBody>
        <Cart cart={cart} className="checkout-cart" />
      </StyledCheckoutBody>
      <StyledCheckoutBtn>Checkout</StyledCheckoutBtn>
    </StyledCheckout>
  )
}

export default Checkout
