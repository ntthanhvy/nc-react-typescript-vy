import styled, { css } from 'styled-components'
import Button from '../ui-kits/Button/Button'
import { Grid, Cell } from 'styled-css-grid'

export const ProductContainer = styled(Grid)`
  width: 100%;
  align-self: center;
  justify-content: center;


  ${(props) =>
    props.blockView &&
    css`
      grid-template-columns: repeat(auto-fill, 48%);

      @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media only screen and (max-width: 414px) {
        grid-auto-rows: minmax(42vw, auto);
      }
    `}

  ${(props) =>
    props.listView &&
    css`
      grid-template-columns: 85%;
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
