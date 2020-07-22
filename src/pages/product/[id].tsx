import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Router, { useRouter } from 'next/router'
import _ from 'lodash'

import { baseUrl } from '../../common/urlHelper'
import { Layout } from '../../components/Layout'

import {
  StyledProduct,
  StyledProductInfo,
  ProductImagesHolder,
  ProductImages,
  ProductImg,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductShortDesc,
} from '../../components/elements/Product/Product.styled'

const imgExd = 'https://media3.scdn.vn/'

interface IProduct {
  id: string
  images: string[]
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

const Detail: React.FC<IProduct> = (props) => {
  const { images, name, id, children, price, shortDescription } = props
  const [currImg, setCurrImg] = React.useState<string>(images[0])

  const parsePrice = (price) => price.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,')

  return (
    <StyledProduct key={id}>
      <StyledProductInfo>
        <ProductImagesHolder>
          <ProductImg src={imgExd + currImg} alt={`${currImg}`} />
          <ProductImages>
            {images.map((img) => (
              <ProductImg small src={imgExd + img} alt={`${img}`} onClick={() => setCurrImg(img)} />
            ))}
          </ProductImages>
        </ProductImagesHolder>
        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductPrice>{parsePrice(price)} VND</ProductPrice>
          <ProductShortDesc>{shortDescription}</ProductShortDesc>
        </ProductDetails>
      </StyledProductInfo>
      {children}
    </StyledProduct>
  )
}

const Product: React.FC<IProductProps> = ({ product, cart }) => {
  const createMarkup = (htmlString) => ({ __html: htmlString })

  return (
    <Layout>
      {product ? (
        product.name ? (
          <>
            <Detail {...product}>
              <div dangerouslySetInnerHTML={createMarkup(product.description)} />
            </Detail>
            {_.find(cart, ['id', product.id]) && <h3>Added to cart</h3>}
          </>
        ) : (
          ''
        )
      ) : (
        <h2>Loading...</h2>
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
