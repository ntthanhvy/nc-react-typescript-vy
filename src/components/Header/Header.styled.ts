import styled from 'styled-components'
import Button from '../ui-kits/Button/Button'

export const StyledHeader = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  color: #202124;
  contain: layout;
  display: grid;
  font-size: 14px;
  height: 64px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  grid-template-columns: 100px auto 100px;

  & .leftHeader {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    & .cartHolder {
      position: relative;
      // width: 50px;
      // height: 70px;
      margin-right: 15px;
      display: flex;
      justifi-content: center;
      align-items: center;

      & .bagde {
        width: 15px;
        height: 15px;
        position: absolute;
        top: -5px;
        right: -8px;
        background-color: red;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 12px;
        border-radius: 50%;
      }
    }
  }
`

export const StyledHeaderLogo = styled.div``
export const StyledHeaderMenu = styled.ul`
  display: grid;
  align-content: space-around;
  grid-template-columns: inherit;
  list-style: none;
`
export const StyledHeaderMenuItem = styled.li``
export const StyledHeaderButton = styled(Button)``
