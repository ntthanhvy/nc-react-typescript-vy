/**
 * @jest-environment jsdom
 */

import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'

import { ProductList } from './ProductList'
import theme from '../../components/Theme'
import { getProductsMock } from '../../utils/gql-mock'
import '@testing-library/jest-dom'

describe('ProductList', () => {
  const addToCart = jest.fn().mockImplementation((x) => x)

  beforeEach(() => {
    render(
      <MockedProvider mocks={getProductsMock} addTypename={false}>
        <ProductList AddToCart={addToCart} />
      </MockedProvider>
    )
  })

  it('display product list', async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // const { getByTestId } = component

    const productsLst = screen.getByTestId('products-list')

    console.log(productsLst)

    expect(productsLst.children.length).toBe(1)
  })

  // it('Button addToCart', async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 5000))

  //   const addBtn = component
  //     .find('[data-testid="products-list"]')
  //     .find('[data-testid="add-to-cart"]')
  //     .first()

  //   addBtn.simulate('click')

  //   expect(addToCart).toHaveBeenCalled()
  // })

  // it("addToCart should return item's id", () => {
  //   expect(addToCart(1)).toBe(1)
  // })
})
