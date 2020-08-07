import styled, { css } from 'styled-components'

export const StyledSignin = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  place-items: center;
  justify-content: center;
`

export const SigninBox = styled.div`
  width: 90vw;
  //   height: 150px;
  border-radius: calc(10 / 1440 * 100vw);
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-gap: 8px;
  place-content: center;
`

export const SigninHeader = styled.div`
//   background: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};

  height: 100%;
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 300%;
  place-content: center;
`

export const SigninForm = styled.form`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 14px;
`

export const StyledFormControl = styled.div`
  width: fit-content;
  //   display: grid;
  //   grid-template-rows: 2;
  //   grid-template-areas: 'label input';
  //   grid-gap: 15px;
`

export const StyledFormLabel = styled.label`
  grid-area: label;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`

export const StyledFormInput = styled.input`
  grid-area: input;
  height: 30px;
  padding: 10px 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  border: none;
`

export const StyledFormButton = styled.button`
  padding: 5px 10px;
  height: 40px;
  font-size: 14px;

  ${(props) =>
    props.outline
      ? css`
          color: ${(props) => props.theme.colors.primary};
          background: ${(props) => props.theme.colors.light};
          border: 3px solid ${(props) => props.theme.colors.primary};
        `
      : css`
          color: ${(props) => props.theme.colors.light};
          background: ${(props) => props.theme.colors.primary};
          border: 3px solid transparent;
        `}

    $ .loading {
        
    }
`
