import styled, { css } from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 14px;
`

export const StyledFormControl = styled.div`
  display: grid;
  grid-template-areas:
    'label'
    'input';
`

export const StyledInput = styled.input`
  grid-area: input;
  height: 30px;
  padding: 5px 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-bottom: 3px solid transparent;

  &:focus {
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  }
`

export const StyledFormLabel = styled.label`
  grid-area: label;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`

export const StyledFormButton = styled.button`
  padding: 5px 30px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10vw;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.outline
      ? css`
          color: ${(props) => props.theme.colors.primary};
          background: transparent;
          border: 3px solid ${(props) => props.theme.colors.primary};
        `
      : css`
          color: ${(props) => props.theme.colors.light};
          background: ${(props) => props.theme.colors.primary};
          border: 3px solid transparent;
        `}

  ${(props) =>
    props.disable ||
    (props.loading &&
      css`
        opacity: 0.8;
        cursor: default;
      `)}

  
  & svg.loading {
    animation: rorate 2s ease-in-out 0.25s infinite;
  }

  @keyframes rorate {
    from {
      transform: rorate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
