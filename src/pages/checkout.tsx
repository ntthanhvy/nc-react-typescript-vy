import React from 'react'
import Router from 'next/router'
import { StyledCheckout } from '../components/elements/Checkout/Checkout.styled'
import { ICartItem } from '../components/elements/Cart/CartItem'

const Checkout = () => {
  const [cart, setCart] = React.useState<ICartItem[]>([])
  
  React.useEffect(() => {
    if (process.browser) {
      const token = localStorage.getItem('token')
      if (!token) {
        alert('You need to login!')
        Router.back()
      } else {
        const temp = localStorage.getItem('cart')
        setCart(JSON.parse(temp))
      }
    }
  })
  return <StyledCheckout cart={cart} />
}

export default Checkout
