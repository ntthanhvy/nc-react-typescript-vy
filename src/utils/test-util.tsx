import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from '../components/Theme'
import { MockedProvider } from '@apollo/client/testing'

const AllTheProviders = ({ children, mocks }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
