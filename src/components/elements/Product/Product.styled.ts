import styled from 'styled-components'
import { Grid, Cell } from 'styled-css-grid'

export const StyledProduct = styled.div`
  width: 90%;
  border: 1px solid #e2e2e2;
  border-radius: calc(10 / 1440 * 100vw);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: calc(50 / 1440 * 100vw);

  & .details-block > h4 {
    font-size: calc(18 / 1440 * 100vw) !important;
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
    font-size: calc(14 / 1440 * 100vw) !important;
    place-items: center !important;
  }

  & .details-block ul {
    margin-inline-start: 20px !important;
  }
`

export const StyledProductInfo = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(1, 1fr);
`

export const ProductImagesHolder = styled(Grid)`
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
`

export const ProductImages = styled(Grid)`
  width: 100%;
  max-height: calc(50vw + 8px);
  grid-column: 5/6;
  place-items: center;
  grid-template-columns: repeat(auto-fill, 100%);
  overflow-y: auto;
  overflow-x: hidden;
`

export const ProductImg = styled.img`
  grid-column: ${(props) => (props.small ? '1/2' : '1/5')};

  width: ${(props) => props.small && '100%'};
  height: ${(props) => (props.small ? '10vw' : '100%')};
  border: calc(2 / 1440 * 100vw) solid #e2e2e2;
  border-radius: calc(10 / 1440 * 100vw);
  place-items: center;
  cursor: pointer;
  padding: 10px;
`

export const ProductDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const ProductName = styled.span`
  margin-bottom: calc(18 / 1440 * 100vw);
  font-size: calc(32 / 1440 * 100vw);
  font-weight: 700;
  color: ${(props) => props.theme.colors.blue2};
`

export const ProductPrice = styled.span`
  margin-bottom: calc(18 / 1440 * 100vw);
  font-size: calc(25 / 1440 * 100vw);
  font-weight: 700;
  color: ${(props) => props.theme.colors.red1};
`

export const ProductShortDesc = styled.p`
  margin-bottom: calc(18 / 1440 * 100vw);
  font-size: calc(18 / 1440 * 100vw);
`
