/**
 * @jest-environment jsdom
 */

import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render, fireEvent } from '@testing-library/react'

import Home from '../../pages'
import { getProductsMock } from '../../utils/gql-mock'
import '@testing-library/jest-dom'

test('ProductList', () => {
  it('display product list', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={getProductsMock}>
        <Home />
      </MockedProvider>
    )
    const productsLst = getByTestId('products-list')

    expect(productsLst.children.length).toBe(1)
  })
})
