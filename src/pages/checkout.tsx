import React from 'react'
import Router from 'next/router'

const Checkout = () => {
  React.useEffect(() => {
    if (process.browser) {
      const token = localStorage.getItem('token')
      if (!token) {
        alert('You need to login!')
        Router.back()
      }
    }
  })
  return <div></div>
}

export default Checkout
