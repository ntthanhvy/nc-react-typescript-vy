/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow, mount } from 'enzyme'

import Footer from '../../../components/Footer/Footer'

describe('Footer test', () => {
    it('renders Footer', () => {
        shallow(<Footer />)
    })
})
