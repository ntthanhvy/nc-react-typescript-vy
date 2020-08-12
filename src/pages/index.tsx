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
  LeftSide,
} from '../components/elements/ProductList/ProductList.styled'
import SearchInput from '../components/elements/ProductList/SeachInput'
import Cart from '../components/elements/Cart'

import { Footer } from '../components/Footer'
import { Card, Input } from '../components/ui-kits'

import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { ICartItem } from '../components/elements/Cart/CartItem'
import { IProduct } from './product/[id]'

interface IHome {
  products: IProduct[]
}

const Home: React.FC<IHome> = ({ products }) => {
  const [blockView, setBlockView] = React.useState<boolean>(true)
  const [listView, setListView] = React.useState<boolean>(false)
  const [keyword, setKeyword] = React.useState<string>('')
  const [cart, setCart] = React.useState<ICartItem[]>([])

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword,
        page: 1,
      },
    },
  })

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

    console.log(cart)
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  const removeCart = (id) => {
    const temp = cart.filter((prod) => prod.productId !== id)
    setCart(temp)

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  const onSearchChanged = (e) => {
    setKeyword(e.target.value)
  }

  if (data?.getAllProduct?.data) {
    products = data.getAllProduct.data
  }

  React.useEffect(() => {
    if (process.browser) {
      let temp = window.localStorage.getItem('cart') || '[]'
      setCart(JSON.parse(temp))
    }
  }, [])

  React.useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <>
      <Layout>
        <SelectView columns={2}>
          <SelectOpt
            onClick={() => {
              setBlockView(true)
              setListView(false)
            }}
            blockView={blockView}
          >
            <MdViewModule fontSize={32} />
          </SelectOpt>
          <SelectOpt
            onClick={() => {
              setBlockView(false)
              setListView(true)
            }}
            listView={listView}
          >
            <MdViewList fontSize={32} />
          </SelectOpt>
        </SelectView>
        <StyledProductContainer>
          <LeftSide columns="unset">
            <SearchInput
              searchIcon={<MdSearch fontSize={14} />}
              // onFinish={applySearch}
            >
              <Input
                type="text"
                placeholder="Search"
                value={keyword}
                onChange={onSearchChanged}
                className="search-input"
              />
            </SearchInput>
            <Cart className="cart" cart={cart} setCart={setCart} removeCart={removeCart} />
          </LeftSide>
          <ProductContainer blockView={blockView} listView={listView}>
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
      <Footer />
    </>
  )
}

export default withApollo({ ssr: true })(Home)
