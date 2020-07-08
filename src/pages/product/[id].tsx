import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import _ from 'lodash'

import { baseUrl } from '../../common/urlHelper'
import { Layout } from '../../components/Layout'
import { Text } from '../../components/ui-kits'

import { StyledProduct } from './Product.styled'

interface IProduct {
  id: string
  image: string
  name: string
  description: string
  price: number
}

interface ICart {
  id: string
  count: number
}

interface IProductProps {
  product: IProduct
  cart: ICart
}

interface IDetail {
  id: string
  image: string
  name: string
  price: number
  shortDescription: string
}

const Detail: React.FC<IDetail> = ({ image, name, id, children, price, shortDescription }) => {
  return (
    <StyledProduct key={id}>
      <div className="product-info">
        <div className="product-img">
          <img src={image} alt={`${id}-img`} />
        </div>
        <div className="product">
          <span className="product-text">{name}</span>
          <span className="product-price">{price} VND</span>
          <span className="short-description">{shortDescription}</span>
        </div>
      </div>
      {children}
    </StyledProduct>
  )
}

const Product: React.FC<IProductProps> = ({ product, cart }) => {
  const createMarkup = (htmlString) => ({ __html: htmlString })

  return (
    <Layout>
      {product ? (
        <>
          <Detail {...product}>
            <div dangerouslySetInnerHTML={createMarkup(product.description)} />
          </Detail>
          {_.find(cart, ['id', product.id]) && <h3>Added to cart</h3>}
        </>
      ) : (
        <h2>Product not found</h2>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/product`)
  const data = await res.json()
  const products = data.data

  const paths = products.map((prod) => `/product/${prod.id}`)

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const res = await fetch(`${baseUrl}/product/${id}`)
  const product = await res.json()

  return { props: { product } }
}

export default Product
