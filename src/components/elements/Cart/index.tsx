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

interface ICart {
  cart: ICartItem[]
  setCart?: (item) => void
  removeCart?: (id: string) => void
  className?: string
}

const Cart: React.FC<ICart> = ({ cart, setCart, removeCart, className, ...props }) => {
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
        <StyledCartText color="#8a9599">No Items in your Cart</StyledCartText>
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
    </StyledCart>
  )
}

export default Cart
