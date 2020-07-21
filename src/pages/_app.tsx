import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import { Header } from '../components/Header'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/Theme'
import { grapghQLURL } from '../common/urlHelper'

const StyledWrapper = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  color: #000000;
  font-size: calc(18 / 1440 * 100vw);
`
const client = new ApolloClient({
  uri: grapghQLURL,
  cache: new InMemoryCache(),
})

export interface ICart {
  id: string
  count: number
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [cart, setCart] = React.useState<ICart[]>([])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
              rel="stylesheet"
            ></link>
            <meta charSet="utf-8" />
          </Head>
          <Header cartCount={cart.length} />
          <Component {...pageProps} cart={cart} setCart={setCart} />
        </StyledWrapper>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
