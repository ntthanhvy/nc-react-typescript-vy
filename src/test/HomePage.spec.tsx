/**
 * @jest-environment jsdom
 */
import React from 'react'
import {
  render,
  fireEvent,
  waitFor,
  getByText,
  getByTestId,
  findByTestId,
  getByPlaceholderText,
  within,
  fireEvent,
} from '../utils/test-util'

import '@testing-library/jest-dom'

import { MockedProvider } from '@apollo/client/testing'
import { GET_PRODUCTS } from '../graphql/product/product.query'

import Home from '../pages'

jest.mock('next/router')

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
      variables: { input: { keyword: '', page: 1 } },
    },
    result: () => ({
      data: {
        getAllProduct: {
          data: [
            {
              id: '1',
              name: 'product-1',
              price: 25000,
              imgUrl: 'image1.jpg',
              namePath: 'product-1',
            },
            {
              id: '2',
              name: 'product-1',
              price: 25000,
              imgUrl: 'image1.jpg',
              namePath: 'product-1',
            },
            {
              id: '3',
              name: 'product-1',
              price: 25000,
              imgUrl: 'image1.jpg',
              namePath: 'product-1',
            },
            {
              id: '4',
              name: 'product-1',
              price: 25000,
              imgUrl: 'image1.jpg',
              namePath: 'product-1',
            },
          ],
        },
      },
    }),
  },
]

describe('Test Home Page', () => {
  let cart = []
  const setCart = jest.fn().mockImplementation((items) => (cart = items))

  it('Home Page should render with loading state', async () => {
    const { getByText } = await render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home cart={cart} setCart={setCart} />
      </MockedProvider>
    )

    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('Home Page should render with error', async () => {
    const errorMock = {
      request: {
        query: GET_PRODUCTS,
        variables: { input: { keyword: '', page: 1 } },
      },
      error: new Error('error'),
    }

    const { getByText } = await render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Home cart={cart} setCart={setCart} />
      </MockedProvider>
    )

    await waitFor(() => getByText('error'))

    expect(getByText('error')).toBeInTheDocument()
  })

  it('should render with mocks data', async () => {
    const { useRouter } = require('next/router')
    const { findByTestId, getByTestId, getByPlaceholderText } = await render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home cart={cart} setCart={setCart} router={() => useRouter()} />
      </MockedProvider>
    )

    await waitFor(() => expect(getByTestId('product-list').children).toBeDefined())

    const productList = await findByTestId('product-list')

    expect(productList.childNodes).toHaveLength(4)
    expect(getByPlaceholderText('Search')).toBeInTheDocument()

    const item = productList.children[0] as HTMLElement
    console.log(item)

    const buttons = within(item).queryAllByRole('button')
    console.log(buttons)

    fireEvent(buttons[0], new Event('click'))
    expect(screen.getByText('product-1')).toBeInTheDocument()
  })

  // it('Should add to cart', async () => {
  //   const mock = {
  //     request: { query: GET_PRODUCTS, variables: { input: { keyword: '', page: 1 } } },
  //     result: {
  //       data: {
  //         getAllProduct: {
  //           data: [{ id: '1', name: 'product-1', price: 10000 }],
  //         },
  //       },
  //     },
  //   }

  //   const { getByTestId, findByTestId } = await render(
  //     <MockedProvider mocks={[mock]} addTypename={false}>
  //       <Home cart={cart} setCart={setCart} />
  //     </MockedProvider>
  //   )

  //   await waitFor(() => expect(getByTestId('product-list').children).toBeDefined())

  //   const productList = await findByTestId('product-list')

  //   expect(productList.childNodes).toHaveLength(1)
  // })
})
