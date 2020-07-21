import React from 'react'
import _ from 'lodash'

import { useQuery } from '@apollo/client'
import withApollo from '../utils/withApollo'
import { GET_PRODUCTS } from '../graphql/product/product.query'

import Router from 'next/router'

import { Layout } from '../components/Layout'
import { Button } from '../components/ui-kits'
import { MdViewList, MdViewModule } from 'react-icons/md'

import { SelectView, SelectOpt, ProductContainer } from '../components/elements/ProductList.styled'

import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits'

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

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      input: {
        page: 1,
        keyword: 'Samsung',
      },
    },
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  console.log(data?.getAllProduct?.data)
  products = data?.getAllProduct?.data

  return (
    <>
      <Layout>
        <SelectView>
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
        <ProductContainer blockView={blockView} listView={listView}>
          {products.map((data: IProduct) => (
            <Card
              key={data.id}
              imageURL={data.imgUrl}
              buttonGroups={
                <>
                  <Button onClick={() => Router.push(`/product/${data.id}`)}>View</Button>
                  <Button onClick={() => addToCart(data.id)}>Add to Cart</Button>
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

// export const getStaticProps: GetStaticProps = async (context) => {
//   // const res = await fetch(`${baseUrl}/product`)
//   // const data = await res.json()

//   return { props: { products: [] } }
// }

// export default withApollo({ ssr: true })(Home)
export default Home
