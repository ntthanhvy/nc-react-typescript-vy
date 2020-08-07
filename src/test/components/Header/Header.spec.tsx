/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow, mount } from 'enzyme'

import { Header } from '../../../components/Header/'

describe('HEader test', () => {
  it('renders Header', () => {
    shallow(<Header />)
  })
})
