import styled, { css } from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  min-height: 160px;
  word-wrap: break-word;
  margin: 15px;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.blockView &&
    css`
      min-width: 160px;
      width: 45%;
      padding: 10px;
      border: 1px solid ${(props) => props.theme.colors.blue1};
      border-radius: 10px;
      position: relative;

      &:hover {
        cursor: pointer;

        & .overlay {
          // height: 100%;
          display: flex;
        }
      }
    `}

  ${(props) =>
    props.listView &&
    css`
      display: flex;
      width: 85%;
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

  ${(props) =>
    props.listView &&
    css`
      width: 200px;
      height: 100%;
      border: 1px solid ${(props) => props.theme.colors.blue1};
      border-radius: 10px;
      overflow: hidden;
      padding: 10px;
      margin-right: 20px;
    `}

  & img {
    ${(props) =>
      props.blockView &&
      css`
        width: 100%;
        height: 100%;
        border-radius: 10px;
      `}

    ${(props) =>
      props.listView &&
      css`
        height: 100%;
        border-radius: 10px;
      `}
  }

  &:hover {
    cursor: pointer;
  }
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  .product_name,
  .product_price {
    font-weight: 700;
    font-size: 20px;
  }

  .product_name {
    color: ${(props) => props.theme.colors.blue1};
    margin-bottom: 12px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .product_price {
    color: ${(props) => props.theme.colors.red1};
  }
`

export const StyledCardButton = styled.div``

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
    // height: 56px;
    font-size: 14px;
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
