import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from '../components/Header'

interface ICart {
  id: string
  count: number
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [cart, setCart] = React.useState<ICart[]>([])

  console.log('app',pageProps)
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cartCount={cart.length} />
      <Component {...pageProps} cart={cart} setCart={setCart} />
    </>
  )
}

export default MyApp
