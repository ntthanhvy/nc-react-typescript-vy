import React from 'react'

import { StyledCart } from './Cart.styled'

import { CartItem } from '../../ui-kits'

import { useQuery } from '@apollo/react-hooks'
import { GET_CART_ITEMS } from '../../../graphql/product/cart.query'
import withApollo from '../../../utils/withApollo'

const Cart: React.FC = () => {
  const { data, loading, error } = useQuery(GET_CART_ITEMS)

  if (loading) return <p>Loading</p>
  if (error) return <p>ERROR: {error.message}</p>

  return (
    <StyledCart columns={1}>
      {data && data.cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <>
          {data &&
            data.cartItems.map(({ productId, quantity }) => (
              <CartItem key={productId} productId={productId} quantity={quantity} />
            ))}
        </>
      )}
    </StyledCart>
  )
}

export default withApollo({ ssr: true })(Cart)
