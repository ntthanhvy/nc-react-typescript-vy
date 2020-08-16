import styled, { css } from 'styled-components'
import { Grid } from 'styled-css-grid'

export const StyledProductText = styled.span`
  ${(props) => {
    switch (props.type) {
      case 'title':
        return css`
          font-size: 1.3rem;
          font-weight: bold;
        `
      default:
        return
    }
  }}
`

export const StyledProduct = styled.div`
  width: 90%;
  display: grid;
  place-items: center;
  grid-gap: 2rem;
  overflow: hidden;
  padding: calc(50 / 1440 * 100vw);

  & div:last-child {
    width: 100% !important;
  }

  & .details-block > h4 {
    font-size: 1.2rem !important;
    font-weight: 700 !important;
  }

  & .details-block > div > p {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    & a {
      margin: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & img {
      width: 80%;
    }
  }

  & .details-block span {
    font-size: 1rem !important;
    place-items: center !important;
  }

  & .details-block ul {
    margin-inline-start: 20px !important;
  }
`

export const StyledProductInfo = styled.div`
  display: grid;
  place-items: flex-start;
  grid-template-columns: 1fr;
`

export const ProductImagesHolder = styled(Grid)`
  grid-template-columns: 4fr 1fr;
  place-items: center;
`

export const ProductImages = styled(Grid)`
  width: 100%;
  height: calc(50vw + 8px);
  place-items: center;
  grid-auto-rows: 120px;
  grid-template-columns: 1fr;
  overflow-y: auto;
  overflow-x: hidden;
`

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  place-items: center;
  cursor: pointer;
  padding: 0.5em;
`

export const ProductDetails = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: start;
  grid-gap: 20px;
`

export const ProductName = styled.span`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
`

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.red1};
`

export const ProductShortDesc = styled.p`
  min-height: 3rem;
  font-size: 1.2rem;
`

export const BackBtn = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  place-self: start;
  cursor: pointer;
`
