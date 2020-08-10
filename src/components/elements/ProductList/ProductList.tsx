import React from 'react'
import { Card } from '../../ui-kits'
import { ThemeProvider } from 'styled-components'
import theme from '../../Theme'

import { ProductContainer, CusBtn } from './ProductList.styled'

export const ProductList = ({ products = [], addToCart, changePage, blockView, listView }) => {
  console.log(products)

  return (
    <ProductContainer data-testid="products-list" blockView={blockView} listView={listView}>
      {products.map((data) => {
        return (
          <Card
            key={data.id}
            imageURL={data.imgUrl}
            buttonGroups={
              <>
                <CusBtn onClick={changePage}>View</CusBtn>
                <CusBtn data-testid="add-to-cart" onClick={() => addToCart(data.id)}>
                  Add to Cart
                </CusBtn>
              </>
            }
            product_name={data.name}
            blockView={blockView} listView={listView}
          >
            <span className="product_name" onClick={changePage}>
              {data.name}
            </span>
            <span className="product_price">{data.price} VND</span>
            <span>{data.shortDescription}</span>
          </Card>
        )
      })}
    </ProductContainer>
  )
}
