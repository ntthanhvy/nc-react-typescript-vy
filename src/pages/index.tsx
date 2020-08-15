import React from 'react'
import _ from 'lodash'
import Router from 'next/router'
import withApollo from '../utils/withApollo'

import { Layout } from '../components/Layout'
import { MdViewList, MdViewModule, MdSearch } from 'react-icons/md'
import { IoIosCart, IoIosEye } from 'react-icons/io'

import {
  SelectView,
  SelectOpt,
  StyledProductContainer,
  ProductContainer,
  CusBtn,
} from '../components/elements/ProductList/ProductList.styled'
import { SearchInput } from '../components/elements/ProductList'

import { Card, Input } from '../components/ui-kits'

import { useLazyQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { ICartItem } from '../components/elements/Cart/CartItem'
import { IProduct } from './product/[id]'

interface IHome {
  products: IProduct[]
  cart?: ICartItem[]
  setCart?: (item) => void
}

export const Home: React.FC<IHome> = ({ products, cart, setCart }) => {
  const [blockView, setBlockView] = React.useState<boolean>(true)
  const [keyword, setKeyword] = React.useState<string>('')

  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS)

  const addToCart = (product) => {
    if (cart.length && cart.find((prod) => prod.productId === product.id)) {
      let prod = cart.find((prod) => prod.productId === product.id)
      prod.quantity += 1

      setCart([...cart])
    } else {
      const newProd = {
        price: product.price,
        name: product.name,
        productId: product.id,
        quantity: 1,
      }
      setCart([...cart, newProd])
    }

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  const onSubmitInput = (e) => {
    e.preventDefault()
    getProducts({ variables: { input: { keyword, page: 1 } } })
  }

  const onSearchChanged = (e) => {
    setKeyword(e.target.value)
  }

  if (data?.getAllProduct?.data) {
    products = data.getAllProduct.data
  }

  React.useEffect(() => {
    getProducts({
      variables: {
        input: {
          keyword,
          page: 1,
        },
      },
    })

    console.log(cart)
    console.log(products)
  }, [cart])

  return (
    <>
      <Layout>
        <SelectView columns={1}>
          {blockView ? (
            <SelectOpt
              onClick={() => {
                setBlockView(false)
              }}
              listView={!blockView}
            >
              <MdViewList fontSize={32} />
            </SelectOpt>
          ) : (
            <SelectOpt
              onClick={() => {
                setBlockView(true)
              }}
              blockView={blockView}
            >
              <MdViewModule fontSize={32} />
            </SelectOpt>
          )}
        </SelectView>
        <StyledProductContainer>
          <SearchInput onSubmitInput={onSubmitInput} searchIcon={<MdSearch fontSize={14} />}>
            <Input
              type="text"
              placeholder="Search"
              value={keyword}
              onChange={onSearchChanged}
              className="search-input"
            />
          </SearchInput>
          <ProductContainer blockView={blockView}>
            {error && <h2>{error.message}</h2>}
            {(loading && <h2>Loading...</h2>) ||
              products?.map((data: IProduct) => (
                <Card
                  key={data.id}
                  imageURL={data.imgUrl}
                  buttonGroups={
                    <>
                      <CusBtn onClick={() => Router.push(`/product/${data.id}`)}>
                        <IoIosEye fontSize={18} />
                      </CusBtn>
                      <CusBtn onClick={() => addToCart(data)}>
                        <IoIosCart fontSize={18} />
                      </CusBtn>
                    </>
                  }
                  blockView={blockView}
                  product={data}
                />
              ))}
          </ProductContainer>
        </StyledProductContainer>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
