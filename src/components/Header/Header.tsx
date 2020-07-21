import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { IoMdCart } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderMenuItem,
  MenuIcon,
} from './Header.styled'


interface IHeader {
  cartCount?: number
  theme?: any
}

const Header: React.FC<IHeader> = (props) => {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)

  return (
    <StyledHeader>
      <StyledHeaderLogo onClick={() => Router.push('/')}>SWA</StyledHeaderLogo>
      <MenuIcon onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
        <img src="/images/Hamburger.svg" />
      </MenuIcon>
      <StyledHeaderMenu showMenu={showMenu}>
        <StyledHeaderMenuItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Link href="/">
            <a>Products</a>
          </Link>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem signIn>
          <a>
            Sign in
            <FaUser className="userIcon" />
          </a>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
    </StyledHeader>
  )
}

export default Header
