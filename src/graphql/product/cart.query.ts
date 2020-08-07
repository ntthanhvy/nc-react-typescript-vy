import { gql } from 'apollo-boost'

export const GET_CART_ITEMS = gql`
    query GetCartItems {
        cartItems @client
    }
`