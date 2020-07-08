import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from '../components/Header'

import styled from 'styled-components'

const StyledWrapper = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  color: #000000;
  font-size: calc(18 / 1440 * 100vw);
`

interface ICart {
  id: string
  count: number
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [cart, setCart] = React.useState<ICart[]>([])

  return (
    <StyledWrapper>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header cartCount={cart.length} />
      <Component {...pageProps} cart={cart} setCart={setCart} />
    </StyledWrapper>
  )
}

export default MyApp
