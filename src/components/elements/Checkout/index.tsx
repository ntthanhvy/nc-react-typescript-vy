import React from 'react'
import {
  StyledCheckout,
  StyledCheckoutTitle,
  StyledCheckoutBody,
  StyledCheckoutBtn,
} from './Checkout.styled'
import Cart from '../Cart'

const Checkout = () => {
  return (
    <StyledCheckout>
      <StyledCheckoutTitle>Checkout Cart:</StyledCheckoutTitle>
      <StyledCheckoutBody>
        <Cart className="checkout-cart" />
      </StyledCheckoutBody>
      <StyledCheckoutBtn>Checkout</StyledCheckoutBtn>
    </StyledCheckout>
  )
}

export default Checkout
