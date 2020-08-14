import React from 'react'
import Router, { useRouter } from 'next/router'

import { Layout } from '../../components/Layout'

import {
  StyledProductText,
  StyledProduct,
  StyledProductInfo,
  ProductImagesHolder,
  ProductImages,
  ProductImg,
  ProductDetails,
  ProductName,
  ProductPrice,
  BackBtn,
} from '../../components/elements/Product/Product.styled'

import withApollo from '../../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCT } from '../../graphql/product/product.query'
import { formatter } from '../../common/numberFormatter'
import { ICartItem } from '../../components/elements/Cart/CartItem'
import { IoIosArrowDropleft } from 'react-icons/io'

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

interface IProductProps {
  product: IProduct
  cart: ICartItem[]
}

const Detail: React.FC<IProduct> = (props) => {
  const { images, name, id, children, price } = props
  const [currImg, setCurrImg] = React.useState<string>(images[0])

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <StyledProduct key={id}>
      <BackBtn onClick={goBack}>
        <IoIosArrowDropleft fontSize={35} />
      </BackBtn>
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
      {error && <StyledProductText type="title">{error.toString()}</StyledProductText>}
      {(loading && <StyledProductText type="title">Loading...</StyledProductText>) ||
        (product && (
          <>
            <Detail {...product}>
              <div dangerouslySetInnerHTML={createMarkup(product.description)} />
            </Detail>
            {cart.find((c) => c.productId === product.id) && <h3>Added to cart</h3>}
          </>
        ))}
    </Layout>
  )
}

export default withApollo({ ssr: true })(Product)
