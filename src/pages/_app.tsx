import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import FloatCart from '../components/elements/Cart/CartFloatIcon'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/Theme'
import { ICartItem } from '../components/elements/Cart/CartItem'
// import '../components/Theme/main.css'

const StyledWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  color: #000000;
  font-size: calc(18 / 1440 * 100vw);

  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 30px;
`

const globalStyles = `
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #8a9599;
  border-radius: 10em;
}`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [cart, setCart] = React.useState<ICartItem[]>([])
  const router = useRouter()

  React.useEffect(() => {
    if (process.browser) {
      const temp = window.localStorage.getItem('cart') || '[]'
      setCart(JSON.parse(temp))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            rel="stylesheet"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <style type="text/css">{globalStyles}</style>
        </Head>
        <Header />
        <Component {...pageProps} cart={cart} setCart={setCart} />
        {!router.pathname.includes('sign') && <FloatCart cart={cart} setCart={setCart} />}
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  )
}

export default MyApp
