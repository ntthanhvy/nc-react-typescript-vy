import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Router, { useRouter } from 'next/router'
import _ from 'lodash'

import { baseUrl } from '../../common/urlHelper'
import { Layout } from '../../components/Layout'

import { StyledProduct } from '../../components/elements/Product.styled'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../graphql/product/product.query'

interface IProduct {
  id: string
  image: string
  name: string
  description: string
  price: number
  shortDescription: string
}

interface ICart {
  id: string
  count: number
}

interface IProductProps {
  product: IProduct
  cart: ICart
}

const Detail: React.FC<IProduct> = ({ image, name, id, children, price, shortDescription }) => {
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
  const router = useRouter()

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      input: {
        id: router?.query?.id,
      },
    },
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  product = data?.getProductDetail?.data
  console.log(product)

  
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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${baseUrl}/product`)
//   const data = await res.json()
//   const products = data.data

//   const paths = products.map((prod) => `/product/${prod.id}`)

//   return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // const { id } = params

//   // const res = await fetch(`${baseUrl}/product/${id}`)
//   // const product = await res.json()

//   const product = {}

//   return { props: { product } }
// }

export default Product
