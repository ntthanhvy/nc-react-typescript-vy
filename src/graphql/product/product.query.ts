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
  query GetProduct($input: GetProductDetailInput!) {
    getProductDetail(input: $input) {
      id
      name
      price
      images
      description
    }
  }
`
