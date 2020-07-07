import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import _ from 'lodash'

import { baseUrl } from '../../common/urlHelper'

import { Text, Button } from '../../components/ui-kits'
import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'

import styled from 'styled-components'

export const StyledProduct = styled.div`
  width: 80%;
  // height: 70vh;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

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
  detail: string
}

const Detail: React.FC<IDetail> = ({ detail }) => {
  return React.createElement('div', null, detail)
}

const Product: React.FC<IProductProps> = ({ product, cart }) => {
  const createMarkup = (htmlString) => ({ __html: htmlString })

  return (
    <Layout>
      {product ? (
        <div dangerouslySetInnerHTML={createMarkup(product.description)}>
          {_.find(cart, ['id', product.id]) && <h3>Added to cart</h3>}
        </div>
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
