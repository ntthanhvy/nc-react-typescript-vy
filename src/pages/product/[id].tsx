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
  const [currImg, setCurrImg] = React.useState<string>('')

  const parsePrice = (price) => price.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,')
  
  React.useEffect(() => {
    setCurrImg(images[0])
    console.log(props)
  })

  return (
    <StyledProduct key={id}>
      <StyledProductInfo>
        <ProductImagesHolder>
          <ProductImg src={currImg} alt={`${currImg}`} />
          <ProductImages>
            {images.map((img) => (
              <ProductImg small src={img} alt={`${img}`} onClick={() => setCurrImg(img)} />
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
