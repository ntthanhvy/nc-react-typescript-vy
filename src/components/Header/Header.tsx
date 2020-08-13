import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { FaUser } from 'react-icons/fa'

import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderMenuItem,
  MenuIcon,
  SignUpBtn,
} from './Header.styled'
// import { default as MenuLogo } from '../../../public/images/Hamburger.svg'

interface IHeader {
  theme?: any
}

const Header: React.FC<IHeader> = (props) => {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)
  const [token, setToken] = React.useState<string>('')

  React.useEffect(() => {
    if (process.browser) {
      setToken(localStorage.getItem('token'))
    }
  })

  const signOut = () => {
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <StyledHeader>
      <StyledHeaderLogo onClick={() => Router.push('/')}>SWA</StyledHeaderLogo>
      <MenuIcon onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
        <img src="/images/Hamburger.svg" />
        {/* <MenuLogo /> */}
      </MenuIcon>
      <StyledHeaderMenu showMenu={showMenu}>
        <StyledHeaderMenuItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Link href="/checkout">
            <a>Checkout</a>
          </Link>
        </StyledHeaderMenuItem>
        {token ? (
          <>
            <StyledHeaderMenuItem onClick={signOut}>Sign Out</StyledHeaderMenuItem>
            <StyledHeaderMenuItem signIn>
              User <FaUser className="userIcon" />
            </StyledHeaderMenuItem>
          </>
        ) : (
          <StyledHeaderMenuItem signIn>
            <Link href="/signin">
              <a>
                Sign In
                <FaUser className="userIcon" />
              </a>
            </Link>

            <Link href="/signup">
              <SignUpBtn>Sign Up</SignUpBtn>
            </Link>
          </StyledHeaderMenuItem>
        )}
      </StyledHeaderMenu>
    </StyledHeader>
  )
}

export default Header
