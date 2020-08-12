import React from 'react'

import {
  StyledCart,
  StyledCartTitle,
  StyledCartText,
  StyledCartTotal,
  CartBtn,
} from './Cart.styled'

import CartItem, { ICartItem } from './CartItem'
import { useRouter } from 'next/router'
import { formatter } from '../../../common/numberFormatter'
import { Button } from '../../ui-kits'

interface ICart {
  cart: ICartItem[]
  setCart?: (item) => void
  removeCart?: (id: string) => void
  className?: string
}

const Cart: React.FC<ICart> = ({ cart, setCart, removeCart, className }) => {
  const router = useRouter()
  const total = () => {
    let sum = 0
    cart.forEach((item) => (sum += item.price * item.quantity))
    return sum
  }

  const goToCheckout = () => {
    router.push('/checkout')
  }

  const removeAllCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <StyledCart columns={1} className={className}>
      <StyledCartTitle>
        CART{' '}
        <CartBtn onClick={removeAllCart} className="remove">
          Remove Cart
        </CartBtn>
      </StyledCartTitle>
      {!cart.length ? (
        <StyledCartText>No Items in your Cart</StyledCartText>
      ) : (
        <>
          {cart.map(({ productId, quantity, name, price }) => (
            <CartItem
              key={productId}
              productId={productId}
              quantity={quantity}
              name={name}
              price={price}
              remove={() => removeCart(productId)}
            />
          ))}
        </>
      )}
      <StyledCartTotal>
        <StyledCartText>Total: </StyledCartText>
        <StyledCartText color="#FF0000" size="18px">
          {formatter.format(total())}
        </StyledCartText>
      </StyledCartTotal>
      <CartBtn onClick={goToCheckout}>{`Check out >>`}</CartBtn>
    </StyledCart>
  )
}

export default Cart
