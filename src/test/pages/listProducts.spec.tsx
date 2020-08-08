/**
 * @jest-environment jsdom
 */

import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render, fireEvent, findAllByTestId, getAllByTestId } from '@testing-library/react'
import { mount } from 'enzyme'

import ProductList from './ProductList'
import theme from '../../components/Theme'
import { getProductsMock } from '../../utils/gql-mock'
import '@testing-library/jest-dom'
import { resolve } from 'path'

describe('ProductList', () => {
  const addToCart = jest.fn().mockImplementation((x) => x)
  let component
  beforeEach(() => {
    component = mount(
      <MockedProvider mocks={getProductsMock} addTypename={false}>
        <ProductList AddToCart={addToCart} />
      </MockedProvider>
    )
  })

  it('display product list', async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const productsLst = component.find('[data-testid="products-list"]')

    console.log(productsLst.children().html)

    expect(productsLst.children.length).toBe(1)
  })

  it('Button addToCart', async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const addBtn = component
      .find('[data-testid="products-list"]')
      .find('[data-testid="add-to-cart"]')
      .first()

    addBtn.simulate('click')

    expect(addToCart).toHaveBeenCalled()
  })

  it("addToCart should return item's id", () => {
    expect(addToCart(1)).toBe(1)
  })
})
