import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from '../components/Header'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/Theme'

const StyledWrapper = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  color: #000000;
  font-size: calc(18 / 1440 * 100vw);
`

export interface ICart {
  id: string
  count: number
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [cart, setCart] = React.useState<ICart[]>([])

  return (
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
          {/* <meta charset="utf-8" /> */}
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />

          <link rel="manifest" href="/manifest.json" />
          {/* <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" /> */}
          {/* <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" /> */}
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            rel="stylesheet"
          />
        </Head>
        <Header cartCount={cart.length} />
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </StyledWrapper>
    </ThemeProvider>
  )
}

export default MyApp
