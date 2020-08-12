import React from 'react'
import Router from 'next/router'

const Checkout = () => {
  React.useEffect(() => {
    if (process.browser) {
      const token = localStorage.getItem('token')
      if (!token) {
        setTimeout(() => {
          alert('You need to login!')
        }, 5000)
        Router.push('/signin')
      }
    }
  })
  return <div></div>
}

export default Checkout
