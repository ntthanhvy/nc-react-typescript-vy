import { gql } from 'apollo-boost'

export const GET_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        id
        sku
        name
        price
        finalPrice
        promotionPercent
        namePath
        imgUrl
      }
    }
  }
`

export const GET_PRODUCT = gql`
query GetProduct($input: GetProductInput) {
  getProductDetail(input: $input) {
    id
    name
    price
    promotionPercent
    imgUrl
    media {
      image
      type
    }
    description
  }
} 
`
