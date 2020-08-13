import React from 'react'
import { useRouter } from 'next/router'
import {
  StyledFloatIcon,
  StyledFloatCartInner,
  Badge,
  StyledCartTotal,
  StyledCartText,
  CartBtn,
} from './Cart.styled'

import Cart from '.'
import { ICartItem } from './CartItem'
import { formatter } from '../../../common/numberFormatter'

import { IoIosCart } from 'react-icons/io'

export interface IFloatCart {
  cart?: ICartItem[]
  setCart?: (item) => void
}

const CartFloatIcon: React.FC<IFloatCart> = ({ cart, setCart }) => {
  const router = useRouter()
  const removeCart = (id) => {
    const temp = cart.filter((prod) => prod.productId !== id)
    setCart(temp)

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  const total = () => {
    let sum = 0
    cart.forEach((item) => (sum += item.price * item.quantity))
    return sum
  }

  const goToCheckout = () => {
    router.push('/checkout')
  }

  React.useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <StyledFloatIcon>
      <StyledFloatCartInner>
        <Cart className="cart" cart={cart} setCart={setCart} removeCart={removeCart} />
        <IoIosCart fontSize={28} />
        <StyledCartTotal>
          <StyledCartText>
            Total:{' '}
            <StyledCartText color="#FF0000" size="18px">
              {formatter.format(total())}
            </StyledCartText>
          </StyledCartText>

          <CartBtn onClick={goToCheckout}>{`Check out >>`}</CartBtn>
        </StyledCartTotal>
      </StyledFloatCartInner>
      <Badge className="badge">{cart.length}</Badge>
    </StyledFloatIcon>
  )
}

export default CartFloatIcon
