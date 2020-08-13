import styled from 'styled-components'

const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`

export const StyledInput = styled.input`
  width: 100%;
  max-height: 40px;
  min-height: 20px;
  border: none;
  border-bottom: calc(2 / 1440 * 100vw) solid ${(props) => props.theme.colors.primary};
  height: calc(40 / 1440 * 100vw);
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};

  &::placeholder {
    font-weight: 300;
    font-style: italic;
    color: ${(props) => `${props.theme.colors.secondary}`};
  }
`
