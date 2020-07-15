import React from 'react'
import _ from 'lodash'
import Router from 'next/router'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import Button from '../components/ui-kits/Button/Button'

import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits'

import { baseUrl } from '../common/urlHelper'
import { ICart } from './_app'

export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`

interface IProduct {
  id: string
  name: string
  image: string
}

interface IHome {
  products: IProduct[]
  cart: ICart[]
  setCart: (cart: ICart[]) => void
}

const Home: React.FC<IHome> = ({ products, cart, setCart }) => {
  const [currentPage, setPage] = React.useState<number>(1)

  const addToCart = (id) => {
    if (_.find(cart, ['id', id])) {
      let prod = _.find(cart, ['id', id])
      prod.count += 1
      setCart(cart)
    } else {
      setCart([...cart, { id: id, count: 1 }])
    }
  }

  const onPageChange = (e) => {
    setPage(e.selected)
    console.log(currentPage)
  }

  return (
    <>
      <Layout>
        <StyledHomeBody>
          {products.map((data: IProduct) => (
            <Card
              key={data.id}
              imageURL={data.image}
              buttonGroups={
                <>
                  <Button onClick={() => Router.push(`/product/${data.id}`)}>View</Button>
                  <Button onClick={() => addToCart(data.id)}>Add to Cart</Button>
                </>
              }
            >
              <span style={{ fontSize: 14 }}>{data.name}</span>
            </Card>
          ))}
        </StyledHomeBody>
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
