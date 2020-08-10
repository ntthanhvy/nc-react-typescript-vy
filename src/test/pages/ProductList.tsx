import React from 'react'
import Router from 'next/router'
import { Card } from '../../components/ui-kits'
import { ThemeProvider } from 'styled-components'
import theme from '../../components/Theme'

import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../graphql/product/product.query'
import { ProductContainer, CusBtn } from '../../components/elements/ProductList/ProductList.styled'
import withApollo from '../../utils/withApollo'

 export const ProductList = ({ products = [], AddToCart }) => {
  const { data, loading } = useQuery(GET_PRODUCTS, {
    variables: { input: { keyword: '', page: 1 } },
  })

  if (loading) return <h2>Loading...</h2>

  if (!loading && data?.getAllProduct.data) {
    console.log(data)
    products = data.getAllProduct.data
  }

  console.log(data?.getAllProduct.data);
  

  return (
    <ThemeProvider theme={theme}>
      <ProductContainer data-testid="products-list">
        {products.map((data) => {
          return (
            <Card
              key={data.id}
              imageURL={data.imgUrl}
              buttonGroups={
                <>
                  <CusBtn onClick={() => Router.push(`/product/${data.id}`)}>View</CusBtn>
                  <CusBtn data-testid="add-to-cart" onClick={() => AddToCart(data.id)}>
                    Add to Cart
                  </CusBtn>
                </>
              }
              product_name={data.name}
            >
              <span className="product_name" onClick={() => Router.push(`/product/${data.id}`)}>
                {data.name}
              </span>
              <span className="product_price">{data.price} VND</span>
              <span>{data.shortDescription}</span>
            </Card>
          )
        })}
      </ProductContainer>
    </ThemeProvider>
  )
}

export default withApollo({ srr: true })(ProductList)
