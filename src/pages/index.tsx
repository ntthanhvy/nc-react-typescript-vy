import React from 'react'
import _ from 'lodash'
import Head from 'next/head'
import Router from 'next/router'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import Button from '../components/ui-kits/Button/Button'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits/Card'

import { baseUrl } from '../common/urlHelper'

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

interface ICart {
  id: string
  count: number
}

function Home({ products }) {
  // const { loading, error, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     input: {
  //       page: 1,
  //       keyword: 'Samsung',
  //     },
  //   },
  // })
  // if (error) return <h1>Error</h1>
  // if (loading) return <h1>Loading...</h1>

  // const products = data?.getAllProduct?.data
  // if (!products || !products.length) {
  //   return <p>Not found</p>
  // }

  let [cart, setCart] = React.useState<ICart[]>([])

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cartCount={cart.length} />
      <Layout>
        <StyledHomeBody>
          {products.map((data: IProduct) => (
            <Card
              key={data.id}
              imageURL={data.image}
              buttonGroups={
                <>
                  <Button onClick={() => Router.push(`/product/${data.id}`)}>View</Button>
                  <Button
                    onClick={() => {
                      if (_.find(cart, ['id', data.id])) {
                        let prod = _.find(cart, ['id', data.id])
                        console.log(prod)
                        prod.count += 1
                        setCart(cart)
                      } else {
                        setCart([...cart, { id: data.id, count: 1 }])
                      }
                      console.log(cart)
                    }}
                  >
                    Add to Cart
                  </Button>
                </>
              }
            >
              {data.name}
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
