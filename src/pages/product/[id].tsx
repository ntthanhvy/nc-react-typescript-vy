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

import withApollo from '../../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCT } from '../../graphql/product/product.query'
import { formatter } from '../../common/numberFormatter'

const imgExd = 'https://media3.scdn.vn/'

export interface IProduct {
  id: string
  images?: string[]
  name: string
  description: string
  price: number
  shortDescription: string
  imgUrl?: string
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
  const { images, name, id, children, price } = props
  const [currImg, setCurrImg] = React.useState<string>(images[0])

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
          <ProductPrice>{formatter.format(price)} VND</ProductPrice>
          {/* <ProductShortDesc>{shortDescription}</ProductShortDesc> */}
        </ProductDetails>
      </StyledProductInfo>
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
        id: router.query.id,
      },
    },
  })

  console.log(data)

  if (data?.getProductDetail) {
    product = data.getProductDetail
  }

  React.useEffect(() => {
    console.log(product)
    console.log(data)
  }, [product, data])

  return (
    <Layout>
      {error && <h2>{error.toString()}</h2>}
      {(loading && <h2>Loading...</h2>) ||
        (product && (
          <>
            <Detail {...product}>
              <div dangerouslySetInnerHTML={createMarkup(product.description)} />
            </Detail>
            {_.find(cart, ['id', product.id]) && <h3>Added to cart</h3>}
          </>
        ))}
    </Layout>
  )
}

export default withApollo({ ssr: true })(Product)
