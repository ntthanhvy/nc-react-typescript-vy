import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { IoMdCart } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

import { Text } from '../ui-kits/Text'
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderMenuItem,
  MenuIcon,
} from './Header.styled'

const hamburgerIcon = 'images/Hamburger.svg'

interface IHeader {
  cartCount?: number
  theme?: any
}

const Header: React.FC<IHeader> = (props) => {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)

  const returnHome = () => Router.push("/")

  return (
    <StyledHeader>
      <StyledHeaderLogo onClick={() => Router.push("/")}>SWA</StyledHeaderLogo>
      <MenuIcon onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
        <img src={hamburgerIcon} />
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
          <a>Sign in</a>
          <FaUser fontSize={18} className="userIcon" />
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
    </StyledHeader>
  )
}

export default Header
