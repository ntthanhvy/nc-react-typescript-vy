import React from 'react'
import { IoMdCart } from 'react-icons/io'
import { Text } from '../ui-kits/Text'
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButton,
  StyledHeaderMenuItem,
} from './Header.styled'

interface IHeader {
  cartCount?: number
}

const Header: React.FC<IHeader> = (props) => {
  console.log(props.cartCount)
  return (
    <StyledHeader>
      <StyledHeaderLogo>LOGO</StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <Text>Home</Text>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Text>Products</Text>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <div className="leftHeader">
        <div className="cartHolder">
          <IoMdCart fontSize={20} />
          {props.cartCount > 0 && <div className="bagde">{props.cartCount}</div>}
        </div>
        <StyledHeaderButton>Login</StyledHeaderButton>
      </div>
    </StyledHeader>
  )
}

export default Header
