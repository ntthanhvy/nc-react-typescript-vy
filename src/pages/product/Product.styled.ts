import styled from 'styled-components'

const StyledProduct = styled.div`
  width: 90%;
  margin: auto;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;

  & .product-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 20px;

    & .product-img {
      width: 45%;

      & img {
        width: 100%;
      }
    }

    & .product {
      padding: calc(2 * 0.649vw);
      display: flex;
      flex-direction: column;

      & span {
        margin-bottom: 10px;
      }

      & .product-text {
        font-size: calc(32 / 1440 * 100vw);
        font-weight: 700;
      }

      & .product-price {
        font-size: calc(25 / 1440 * 100vw);
      }

      & .short-description {
        font-size: calc(18 / 1440 * 100vw);
      }
    }
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
  }
`

export default StyledProduct;