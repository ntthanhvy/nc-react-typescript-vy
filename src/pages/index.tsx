import React from 'react'
import _ from 'lodash'
import Router from 'next/router'
import { GetStaticProps } from 'next'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import Button from '../components/ui-kits/Button/Button'

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

function Home({ products, cart, setCart }) {
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
              <span style={{ fontSize: 14}}>{data.name}</span>
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
