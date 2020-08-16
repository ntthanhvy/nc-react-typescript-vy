/**
 * jest-environment js-dom
 */

import React from 'react'
import { render, fireEvent, waitFor } from '../utils/test-util'

import Product from '../pages/product/[id]'
import { MockedProvider } from '@apollo/client/testing'
import { GET_PRODUCT } from '../graphql/product/product.query'

describe('Test Product Page', () => {
  let cart = []
  const setCart = jest.fn().mockImplementation((items) => (cart = items))

  test('should render with loading state', () => {
    const loadingMock = {
      request: {
        query: GET_PRODUCT,
        variables: { input: { id: '1' } },
      },
      loading: true,
    }
    const { getByText } = render(
      <MockedProvider mocks={[loadingMock]} addTypename={false}>
        <Product cart={cart} setCart={setCart} />
      </MockedProvider>
    )

    expect(getByText('Loading...')).toBeInTheDocument()
  })

  test('should render with error message', async () => {
    const mock = {
      request: {
        query: GET_PRODUCT,
        variables: { input: { id: '1' } },
      },
      error: new Error("Can't find product"),
    }

    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Product cart={cart} setCart={setCart} />
      </MockedProvider>
    )

    await waitFor(() => getByText('find'))

    expect(getByText('find')).toBeInTheDocument()
  })
})
