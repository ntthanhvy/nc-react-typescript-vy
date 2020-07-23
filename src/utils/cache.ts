import { makeVar, InMemoryCache } from '@apollo/client'

export interface ICartItems {
  productId: string
  quantity: number
}

export const cartItemsVar = makeVar<ICartItems[]>([])

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar()
          },
        },
      },
    },
  },
})
