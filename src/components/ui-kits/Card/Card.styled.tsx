import styled, { css } from 'styled-components'
import { Cell } from 'styled-css-grid'

export const StyledCard = styled(Cell)`
  position: relative;
  // max-height: calc(250 / 1440 * 100vw);
  word-wrap: break-word;
  overflow: hidden;
  width: 100%;

  ${(props) =>
    props.blockView &&
    css`
      height: 42vw;
      position: relative;

      &:hover {
        cursor: pointer;

        & .overlay {
          display: flex;
        }
      }

      @media only screen and (min-width: 768px) {
        height: 130px;
      }
    `}

  ${(props) =>
    props.listView &&
    css`
      display: flex;
      height: 200px;
      flex-direction: row;
      justify-content: flex-start;
      // align-items: flex-start;
    `}
`

export const StyledCardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 10em;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.blue1};
  border-radius: calc(10 / 1440 * 100vw);
  overflow: hidden;

  ${(props) =>
    props.listView &&
    css`
      padding: 10px;
      margin-right: 20px;
      width: calc(250 / 1440 * 100vw);
      height: calc(250 / 1440 * 100vw);
    `}

  &:hover {
    cursor: pointer;
  }
`

export const StyledImg = styled.img`
  // width: 120%;
  height: 100%;
  border-radius: calc(10 / 1440 * 100vw);
  cursor: pointer;
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  .product_name,
  .product_price {
    font-weight: 700;
    font-size: calc(26 / 1440 * 100vw);

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 414px) {
      font-size: calc(26 / 1440 * 100vw);
    }
  }

  .product_name {
    color: ${(props) => props.theme.colors.blue1};
    margin-bottom: calc(12 / 1440 * 100vw);

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .product_price {
    color: ${(props) => props.theme.colors.red1};
  }
`

export const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${(props) => `${props.theme.colors.dark}80`};
  // background-opacity: 0.4;
  padding: 10px;

  & span {
    font-size: calc(18 / 1440 * 100vw);
    color: ${(props) => props.theme.colors.light};
    padding: 20px;
  }
`

export const StyledCardButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.blockView &&
    css`
      & button:first-child {
        margin-bottom: 10px;
      }
    `}

  ${(props) =>
    props.listView &&
    css`
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;

      margin-top: auto;
    `}
`
