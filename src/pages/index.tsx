import React from 'react'
import _ from 'lodash'
import Router from 'next/router'
import { GetStaticProps } from 'next'

import { Layout } from '../components/Layout'
// import { Button } from '../components/ui-kits'
import { MdViewList, MdViewModule } from 'react-icons/md'

import {
  SelectView,
  SelectOpt,
  ProductContainer,
  CusBtn,
} from '../components/elements/ProductList.styled'

import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits'

import { baseUrl } from '../common/urlHelper'
import { ICart } from './_app'

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

  const addToCart = (id) => {
    if (_.find(cart, ['id', id])) {
      let prod = _.find(cart, ['id', id])
      prod.count += 1
      setCart(cart)
    } else {
      setCart([...cart, { id: id, count: 1 }])
    }
  }

  React.useEffect(() => {
    console.log(products)
  })

  return (
    <>
      <Layout>
        <SelectView columns={2}>
          <SelectOpt
            // width={1}
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
        <ProductContainer
          blockView={blockView}
          listView={listView}
          // minRowHeight="20vw"
        >
          {products.map((data: IProduct) => (
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
      </Layout>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${baseUrl}/product`)
  const data = await res.json()

  return { props: { products: data.data } }
}

// export default withApollo({ ssr: true })(Home)
export default Home
