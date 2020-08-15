import styled, { css } from "styled-components";
import { Button } from "../ui-kits";

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  place-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.primary};
  height: 60px;
  width: 100%;
  padding: 0 5% 0 10%;

  @media only screen and (max-width: 768px) {
    padding: 0 5%;
    grid-template-columns: 1fr;
    align-items: center;
  }

  &:first-child {
    justify-items: start;

    @media only screen and (max-width: 768px) {
      justify-items: center;
    }
  }
`;

export const StyledHeaderLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
`;

export const MenuIcon = styled.div`
  position: absolute;
  right: 5%;
  display: none;
  place-self: center;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-column: 1/2;
    grid-row: 1/2;
    transform: ${(props) => props.showMenu && "scale(-1, 1)"};
    z-index: 100;
    height: 40px;
    align-items: center;
    justify-content: center;
  }

  & img {
    height: 20px;
  }
`;

export const StyledHeaderMenu = styled.ul`
  list-style: none;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-auto-columns: 150px;

  @media only screen and (max-width: 768px) {
    max-width: 322px;
    width: 80vw;
    display: ${(props) => (props.showMenu ? "grid" : "none")};
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
`;

export const StyledHeaderMenuItem = styled.li`
  & a {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => (props.signIn ? "1rem" : "1.2rem")};
    text-decoration: none;
    text-transform: ${(props) => (props.signIn ? "none" : "uppercase")};
    text-align: ${(props) => props.signIn && "center"};
  }

  display: grid;
  place-items: center;
  border-bottom: 2px solid transparent;
  transition: border-bottom .3s ease-out;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }


  @media only screen and (max-width: 768px) {
    width: 75%;
    height: ${(props) => (props.signIn ? "35px" : "60px")};
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    justify-content: ${(props) => (props.signIn ? "center" : "flex-start")};
    margin-bottom: 12px;
    margin-top: ${(props) => props.signIn && "auto"};
    position: ${(props) => props.signIn && "relative"};
    justify-self: center;
  }

  ${(props) =>
  props.signIn && css`
    display: grid;
    place-items: center;
    grid-gap: 20px;
    width: 100%;
    border: none;

    &:hover {
      border-color: transparent;
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    & a:first-child {
      height: 100%;
      display: grid;
      grid-gap: 10px;
      place-items: center;
      grid-template-columns: 1fr auto;
      border-bottom: 2px solid transparent;
      transition: .3s ease-out;

      &:hover {
        border-color: ${(props) => props.theme.colors.primary};
      }
    }
  `}
`;

export const SignUpBtn = styled(Button)`
      background: ${(props) => props.theme.colors.blue1};
      color: ${(props) => props.theme.colors.light};
      border-radius: 0.2rem;
      display: grid;
      place-items: center;
      border: 2px solid transparent;
      transition: .3s ease-out;

      &:hover {
        border-color: ${(props) => props.theme.colors.primary};
        background: transparent;
        color: ${(props) => props.theme.colors.primary};
      }
`;
