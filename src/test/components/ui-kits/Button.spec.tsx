/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow, mount } from 'enzyme'

import Button from '../../../components/ui-kits/Button/Button'
import console from 'console'

const BtnTest = () => {
  const [value, setValue] = React.useState<string>('default')
  return (
    <div className="btn-wrapper">
      <h2>{value}</h2>
      <Button onClick={() => setValue('Clicked')}>Change</Button>
    </div>
  )
}

describe('Test Button', () => {
  it('renders button', () => {
    shallow(<Button>Add</Button>)
  })

  it('clicks button', () => {
    const wrapper = mount(<BtnTest />)

    wrapper.find('button').simulate('click')
    expect(wrapper.find('h2').text()).toBe('Clicked')
  })
})
