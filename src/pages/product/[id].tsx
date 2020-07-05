import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import { baseUrl } from '../../common/urlHelper'

import { Text, Button } from '../../components/ui-kits'
import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'

import { StyledProduct } from './Product.style'

interface IProduct {
  id: string
  image: string
  name: string
  description: string
  price: number
}

interface IProductProps {
  product: IProduct
}

const Product: React.FC<IProductProps> = ({ product }) => {
  const router = useRouter()

  let domParser: DOMParser = new DOMParser();
  let content = domParser.parseFromString(product.description, 'text/html')

  return (
    <>
      <Header />
      <Layout>{content}</Layout>
    </>
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
