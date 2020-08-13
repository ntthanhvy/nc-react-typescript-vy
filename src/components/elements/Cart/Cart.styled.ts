import styled, { css } from "styled-components";
import { Grid } from "styled-css-grid";
import { Button } from "../../ui-kits";

export const StyledCart = styled(Grid)`
  grid-area: cart;
  // height: 90%;
  overflow-y: auto;
  padding: 1rem;
  place-items: flex-start;
`;

export const StyledCartTitle = styled.h2`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.primary};

  .remove {
    background: transparent;
    font-size: .7rem;
    place-items: end;
  }
`;

export const StyledCartText = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.primary};
  ${(props) =>
  props.color &&
  css`
      color: ${props.color};
    `}
`;

export const StyledCartItem = styled(Grid)`
  grid-template-areas:
    'name remove'
    'price quantity';
  grid-template-columns: unset;
  place-content: space-between;
  width: 100%;
`;

export const StyledCartItemName = styled.span`
  grid-area: name;
  width: 95%;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
export const StyledCartItemPrice = styled.span`
  grid-area: price;
  width: 60%;
  font-size: .9rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red1};
`;

export const StyledCartItemQuantity = styled.span`
  grid-area: quantity;
  width: 5%;
  place-items: flex-end;
  font-size: .9rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const RemoveCartItem = styled.button`
  grid-area: remove;
  width: 18px;
  height: 18px;
  font-size: 10px;
  font-weight: bold;
  border: 1.5px solid ${(props) => props.theme.colors.red1};
  box-sizing: border-box;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.red1};
  background: transparent;
  padding: 2px;
  cursor: pointer;
`;

export const StyledCartTotal = styled.div`
  display: grid;
  margin-top: 30px;
  padding: 1rem;
  place-items: center;
  grid-gap: 20px;
  width: 100%;

  & > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &:last-child {
    place-self: flex-end;
  }
`;

export const CartBtn = styled(Button)`
    display: grid;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10em;
    background: transparent;
    place-items: center;
    color: ${(props) => props.theme.colors.primary};
    `;

export const StyledFloatIcon = styled.div`
    position: fixed;
    left: 10%;
    bottom: 50px;
    width: 350px;
    height: 400px;
    border-radius: 1em;
`;

export const StyledFloatCartInner = styled.div`
    width: 100%;
    height: 100%;
    place-items: flex-start;

    clip-path: circle(5% at 6% 95%);
    transition: .5s ease-in-out;
    background: ${(props) => props.theme.colors.primary};

    & svg {
      position: absolute;
      color: ${(props) => props.theme.colors.light};
      bottom: 1.5%;
      left: 2%;
    }

    &:hover {
      clip-path: circle(75%);
      background: ${(props) => props.theme.colors.blue3};

      & svg {
        color: ${(props) => props.theme.colors.blue3};
      }

      &.cart {
        height: 100%;
      }
    }

    &:hover + .badge {
      display: none;
    }
`;

export const Badge = styled.span`
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.colors.red2};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: .8rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.light};
    // clip-path: circle(50%);
    bottom: 6%;
    left: 8.5%;
    z-index: 10;
    border: 1px solid ${(props) => props.theme.colors.blue3};
    border-radius: 50%;
`;
