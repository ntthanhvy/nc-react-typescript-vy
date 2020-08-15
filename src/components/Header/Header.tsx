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
    window.localStorage.clear()
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
            <StyledHeaderMenuItem signIn>
              <Link href="#">
                <a>
                  User <FaUser className="userIcon" />
                </a>
              </Link>
              <Link href="/">
                <SignUpBtn onClick={signOut}>Sign out</SignUpBtn>
              </Link>
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
