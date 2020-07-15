import styled, { css } from 'styled-components'
import Button from '../ui-kits/Button/Button'

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  height: 60px;

  // mobile view
  @media only screen and (max-width: 768px) {
    padding: 0 15px;
    justify-content: center;
  }
`

export const StyledHeaderLogo = styled.div`
  font-size: 35px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`

export const MenuIcon = styled.div`
  position: absolute;
  right: 15px;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    transform: ${(props) => props.showMenu && 'scale(-1, 1)'};
    z-index: 100;
  }
`

export const StyledHeaderMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 322px;
    display: ${(props) => (props.showMenu ? 'flex' : 'none')};
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.blue2};
    z-index: 10;
    padding-top: 60px;
    padding-bottom: 30px;
  }
`

export const StyledHeaderMenuItem = styled.li`
  & a {
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => (props.signIn ? '18px' : '25px')};
    font-weight: ${(props) => (props.signIn ? 'normal' : 'bold')};
    text-decoration: none;
    text-transform: ${(props) => (props.signIn ? 'none' : 'uppercase')};
    margin-left: 10px;
    text-align: ${(props) => props.signIn && 'center'};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 80%;
    height: ${(props) => (props.signIn ? '35px' : '60px')};
    border-bottom: 2px solid ${(props) => props.theme.colors.light};
    justify-content: ${(props) => (props.signIn ? 'center' : 'flex-start')};
    margin-bottom: 12px;
    margin-top: ${(props) => props.signIn && 'auto'};
    position: ${(props) => props.signIn && 'relative'};

    .userIcon {
      color: ${(props) => props.theme.colors.light};
      position: absolute;
      right: 0;
    }

    &:hover {
      width: 85%;
      opacity: 90%;
      cursor: pointer;
    }
  }
`
