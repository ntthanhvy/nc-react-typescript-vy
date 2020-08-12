import styled, { css } from 'styled-components'
import { Cell } from 'styled-css-grid'

export const StyledCard = styled(Cell)`
  overflow: hidden;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.blockView
      ? css`
          position: relative;
          cursor: pointer;

          &:hover .overlay {
            clip-path: inset(0% 0% 0% 0%);
          }
        `
      : css`
          display: grid;
          place-items: start;
          grid-template-areas: 'image body';
          border: none;
          grid-auto-columns: 200px auto;
          grid-gap: 20px;
        `}
`

export const StyledCardImage = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  height: 100%;
  min-width: 10em;
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  grid-area: image;

  ${(props) =>
    !props.blockView &&
    css`
      position: initial;
      margin-right: 20px;
      width: 100%;
      border: 1px solid ${(props) => props.theme.colors.blue1};
    `}

  cursor: pointer;
`

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

export const StyledCardBody = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: start;
  grid-area: body;
  grid-template-areas:
    'name name'
    'price buttons';
`

export const StyledCardButtonGroup = styled.div`
  grid-area: buttons;
  display: grid;
  place-items: end;
  width: 100%;
  place-self: end;

  ${(props) =>
    props.blockView
      ? css`
          & button:first-child {
            margin-bottom: 10px;
          }
        `
      : css`
          justify-content: flex-end;
          grid-template: auto / 30px 30px;
          grid-gap: 30px;
        `};
`

export const CardOverlay = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(214, 224, 226, 0.8);
  padding: 0.5rem;
  clip-path: inset(100% 0% 0% 0%);
  transition: clip-path 0.3s ease-out;

  display: grid;
  place-items: start;
  grid-gap: 8px;
  grid-auto-rows: auto;
  grid-template-areas:
    'name name'
    'price buttons';
`

export const StyledCardText = styled.span`
  word-wrap: break-word;
  cursor: pointer;

  ${(props) => {
    switch (props.type) {
      case 'name':
        return css`
          grid-area: name;
          font-size: 1.2rem;
          color: ${(props) => props.theme.colors.primary};

          &:hover {
            text-decoration: underline;
          }
        `
      case 'price':
        return css`
          justify-self: start;
          align-self: end;
          grid-area: price;
          font-size: 1.1rem;
          color: ${(props) => props.theme.colors.red1};
        `
      default:
        break
    }
  }}
`
