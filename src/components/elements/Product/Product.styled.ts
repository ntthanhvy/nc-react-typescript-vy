import styled from 'styled-components'
import { Grid, Cell } from 'styled-css-grid'

export const StyledProduct = styled.div`
  width: 90%;
  border: 1px solid #e2e2e2;
  border-radius: calc(10 / 1440 * 100vw);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;

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
  grid-column: 5/6;
  place-items: center;
  grid-template-columns: repeat(auto-fill, 100%);
`

export const ProductImg = styled.img`
  grid-column: ${(props) => (props.small ? 'span 1/2' : '1/5')};
  grid-row: ${(props) => (props.small ? '1/2' : '1/4')};
`

export const ProductDetails = styled.div`
  padding: calc(2 * 0.649vw);
  display: flex;
  flex-direction: column;
`

export const ProductName = styled.span`
  font-size: calc(32 / 1440 * 100vw);
  font-weight: 700;
`

export const ProductPrice = styled.span`
  font-size: calc(25 / 1440 * 100vw);
`

export const ProductShortDesc = styled.p`
  font-size: calc(18 / 1440 * 100vw);
`
