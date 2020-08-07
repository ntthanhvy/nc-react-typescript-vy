import { GET_PRODUCTS } from '../graphql/product/product.query'

export const getProductsMock = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: { input: { keyword: '', page: 1 } },
    },
    result: {
      data: {
        product: {
          id: 1,
          name: 'product-1',
        },
      },
    },
  },
  {
    request: {
      query: GET_PRODUCTS,
      variables: { input: { page: 1 } },
    },
    error: new Error('Missing keyword'),
  },
]
