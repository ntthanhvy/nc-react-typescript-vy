import React from 'react'
import _ from 'lodash'
import Link from 'next/link'
import Router from 'next/router'
import withApollo from '../utils/withApollo'

import { Layout } from '../components/Layout'
import { MdViewList, MdViewModule, MdSearch } from 'react-icons/md'

import {
  SelectView,
  SelectOpt,
  StyledProductContainer,
  ProductContainer,
  CusBtn,
} from '../components/elements/ProductList/ProductList.styled'
import SearchInput from '../components/elements/ProductList/SeachInput'

import { Footer } from '../components/Footer'
import { Card, Input } from '../components/ui-kits'

import { ICart } from './_app'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { error } from 'console'

interface IProduct {
  id: string
  name: string
  imgUrl: string
  price: number
  shortDescription: string
}

interface IHome {
  products: IProduct[]
  cart: ICart[]
  setCart: (cart: ICart[]) => void
}

const Home: React.FC<IHome> = ({ products, cart, setCart }) => {
  const [blockView, setBlockView] = React.useState<boolean>(true)
  const [listView, setListView] = React.useState<boolean>(false)
  const [keyword, setKeyword] = React.useState<string>('')

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        keyword,
        page: 1,
      },
    },
  })

  const addToCart = (id) => {
    if (_.find(cart, ['id', id])) {
      let prod = _.find(cart, ['id', id])
      prod.count += 1
      setCart(cart)
    } else {
      setCart([...cart, { id: id, count: 1 }])
    }
  }

  const onSearchChanged = (e) => {
    setKeyword(e.target.value)
  }

  // if (loading) return <h2>Loading...</h2>
  // if (error) return <h2>Error</h2>

  if (data?.getAllProduct?.data) {
    products = data.getAllProduct.data
  }

  console.log(data?.getAllProduct?.data)

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
          <ProductContainer blockView={blockView} listView={listView}>
            {(loading && <h2>Loading...</h2>) ||
              products?.map((data: IProduct) => (
                <Card
                  key={data.id}
                  imageURL={data.imgUrl}
                  buttonGroups={
                    <>
                      <CusBtn onClick={() => Router.push(`/product/${data.id}`)}>View</CusBtn>
                      <CusBtn onClick={() => addToCart(data.id)}>Add to Cart</CusBtn>
                    </>
                  }
                  blockView={blockView}
                  listView={listView}
                  product_name={data.name}
                >
                  <span className="product_name" onClick={() => Router.push(`/product/${data.id}`)}>
                    {data.name}
                  </span>
                  <span className="product_price">{data.price} VND</span>
                  <span>{data.shortDescription}</span>
                </Card>
              ))}
          </ProductContainer>
        </StyledProductContainer>
      </Layout>
      <Footer />
    </>
  )
}

export default withApollo({ ssr: true })(Home)
