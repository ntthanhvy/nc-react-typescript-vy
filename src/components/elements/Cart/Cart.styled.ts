import styled, { css } from "styled-components";
import { Grid } from "styled-css-grid";
import { Button } from "../../ui-kits";

export const StyledCart = styled(Grid)`
  grid-area: cart;
`;

export const StyledCartTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: space-between;

  .remove {
    background: transparent;
  }
`;

export const StyledCartText = styled.span`
  font-size: ${(props) => props.size} || 18px;
  font-style: italic;
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
`;

export const StyledCartItemName = styled.span`
  grid-area: name;
  width: 95%;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
export const StyledCartItemPrice = styled.span`
  grid-area: price;
  width: 60%;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red1};
`;

export const StyledCartItemQuantity = styled.span`
  grid-area: quantity;
  width: 5%;
  place-items: flex-end;
  font-size: 10px;
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
  display: flex;
  margin-top: 30px;
  place-content: space-between;
`;

export const CartBtn = styled(Button)`
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10em;
    background: transparent;
`;
