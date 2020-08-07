/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow, mount } from 'enzyme'

import { Layout } from '../../../components/Layout'

describe('LayoutComponent', () => {
    it('should render', () => {
        shallow(<Layout>Body</Layout>)
    })
})