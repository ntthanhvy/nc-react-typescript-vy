import { withApollo } from 'next-apollo'
// import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { makeVar, ApolloClient, InMemoryCache } from '@apollo/client'

export interface ICartItems {
  productId: string
  quantity: number
}

export const cartItemsVar = makeVar<ICartItems[]>([])

export const apolloClient = new ApolloClient({
  uri: 'https://min-shop.herokuapp.com/graphql',
  cache: new InMemoryCache({
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
  }),
})

export default withApollo(apolloClient)
