import styled, { css } from 'styled-components'
import Button from '../ui-kits/Button/Button'

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  align-items: center;
  place-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  height: 40px;
  padding: 0 0 0 10%;

  // mobile view
  @media only screen and (max-width: 768px) {
    padding: 0 5%;
    // justify-content: center;
    grid-template-columns: 1fr;
    align-items: center;
  }

  &:first-child {
    justify-items: start;

    @media only screen and (max-width: 768px) {
      justify-items: center;
    }
  }
`

export const StyledHeaderLogo = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: left;

  &:hover {
    cursor: pointer;
  }
`

export const MenuIcon = styled.div`
  position: absolute;
  right: 5%;
  display: none;
  place-self: center;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-column: 1/2;
    grid-row: 1/2;
    transform: ${(props) => props.showMenu && 'scale(-1, 1)'};
    z-index: 100;
    height: 40px;
    align-items: center;
    justify-content: center;
  }

  & img {
    height: 20px;
  }
`

export const StyledHeaderMenu = styled.ul`
  list-style: none;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;

  @media only screen and (max-width: 768px) {
    max-width: 322px;
    width: 80vw;
    display: ${(props) => (props.showMenu ? 'grid' : 'none')};
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(3, 60px) auto;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -2px;
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.blue2};
    z-index: 10;
    padding-top: calc(60 / 1440 * 100vw);
    padding-bottom: calc(35 / 1440 * 100vw);
  }
`

export const StyledHeaderMenuItem = styled.li`
  & a {
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => (props.signIn ? '14px' : '18px')};
    font-weight: ${(props) => (props.signIn ? 'normal' : 'bold')};
    text-decoration: none;
    text-transform: ${(props) => (props.signIn ? 'none' : 'uppercase')};
    text-align: ${(props) => props.signIn && 'center'};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  .userIcon {
    color: ${(props) => props.theme.colors.light};
    position: absolute;
    margin-left: 10px;
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    width: 75%;
    height: ${(props) => (props.signIn ? '35px' : '60px')};
    border-bottom: 2px solid ${(props) => props.theme.colors.light};
    justify-content: ${(props) => (props.signIn ? 'center' : 'flex-start')};
    margin-bottom: 12px;
    margin-top: ${(props) => props.signIn && 'auto'};
    position: ${(props) => props.signIn && 'relative'};
    justify-self: center;

    .userIcon {
      color: ${(props) => props.theme.colors.light};
      position: absolute;
      right: 0;
    }

    &:hover {
      width: 80%;
    }
  }
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`
