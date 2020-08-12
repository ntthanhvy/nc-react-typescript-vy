import styled, { css } from "styled-components";
import { Grid, Cell } from "styled-css-grid";

export const StyledProductContainer = styled(Grid)`
  width: 100%;
  grid-gap: 20px;
  place-items: start;
  grid-template-columns: unset;
  grid-template-areas: 
  'left'
  'products';

  @media only screen and (min-width: 1024px) {
    grid-template: 'left products';
    grid-auto-columns: 1fr 3fr;

  }
`;

export const LeftSide = styled(Grid)`
  grid-area: left;
  grid-template-areas: 'search';
  grid-gap: 20px;
  width: 100%;

  .cart {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-areas:
    'search'
    'cart';

    .cart {
      display: grid;
    }
  }
`;

export const StyledSearchInput = styled.div`
  grid-area: search;
  display: flex;
  max-height: 40px;
  min-height: 20px;
  width: 100%;
  justify-content: space-between;

  height: calc(40 / 1440 * 100vw);
  border-bottom: calc(2 / 1440 * 100vw) solid ${(props) =>
  props.theme.colors.primary};
  box-sizing: border-box;
`;

export const SearchIcon = styled.div`
  place-content: center;
  display: flex;
  place-items: center;
  justify-content: flex-end;

  &:focus {
    box-shadow: 1px 1px 10px ${(props) => props.theme.colors.blue3};
  }

  > svg {
    cursor: pointer;
  }
`;

export const ProductContainer = styled(Grid)`
  grid-area: products;
  width: 100%;
  place-items: center;
  justify-content: space-around;
  grid-auto-rows: 200px;

  ${(props) =>
  props.blockView
    ? css`
      grid-template-columns: repeat(2, 1fr);

      @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, 200px);
      }

      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, 250px);
        grid-auto-rows: 300px;
      }
    `
    : css`
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 20px;
  `}
`;

export const SelectView = styled(Grid)`
  margin-left: auto;
  margin-bottom: 20px;
`;

export const SelectOpt = styled(Cell)`
  width: 31px;
  height: 31px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5px;

  &:hover {
    opacity: 90%;
    cursor: pointer;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const CusBtn = styled.button`
  min-height: 20px;
  // height: calc(40 / 1440 * 100vw);
  padding: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  // min-width: 8em;
  border-radius: 100px;
  border: calc(2 / 1440 * 100vw) solid transparent;
  color: ${(props) => props.theme.colors.light};
  font-size: calc(16 / 1440 * 100vw);
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background-color: transparent;
    border: calc(2 / 1440 * 100vw) solid ${(props) =>
  props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
