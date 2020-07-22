import styled, { css } from 'styled-components'
import { Grid, Cell } from 'styled-css-grid'

export const StyledProductContainer = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  place-content: center;
  grid-gap: 20px;

  @media only screen and (max-width: 426px) {
    grid-template-columns: repeat(1, 100%);
    place-content: start;
  }
`

export const StyledSearchInput = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-height: 40px;
  min-height: 20px;

  height: calc(40 / 1440 * 100vw);
  border-bottom: calc(2 / 1440 * 100vw) solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;

  & .search-input {
    grid-column: 1/4;
  }
`

export const SearchIcon = styled.div`
  grid-column: 4/5;
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
`

export const ProductContainer = styled(Grid)`
  grid-column: 2/5;
  width: 100%;
  align-self: center;
  justify-content: center;

  ${(props) =>
    props.blockView &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-auto-row: minmax(130px, 200px);

      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (min-width: 1025px) {
        grid-template-columns: repeat(auto-fill, 200px);
      }

      @media only screen and (max-width: 426px) {
        grid-column: 1/2;
      }
    `}

  ${(props) =>
    props.listView &&
    css`
      grid-template-columns: repeat(1, 1fr);
    `}
`

export const SelectView = styled(Grid)`
  margin-left: auto;
  margin-bottom: 20px;
`

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
`

export const CusBtn = styled.button`
  min-height: 20px;
  height: calc(40 / 1440 * 100vw);
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.primary};
  min-width: 8em;
  border-radius: 100px;
  border: calc(3 / 1440 * 100vw) solid transparent;
  color: ${(props) => props.theme.colors.light};
  font-size: calc(16 / 1440 * 100vw);
  cursor: pointer;

  &:hover {
    background-color: #ffffff80;
    border: calc(3 / 1440 * 100vw) solid ${(props) => props.theme.colors.blue1};
    color: ${(props) => props.theme.colors.blue1};
  }
`
