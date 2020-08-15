import styled, { css } from 'styled-components'

export const StyledSignin = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  place-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    place-items: flex-start;
    margin-top: 50px;
  }
`

export const SigninBox = styled.div`
  width: 60vw;
  border-radius: calc(10 / 1440 * 100vw);
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-gap: 8px;

  @media only screen and (min-width: 411px) {
    width: 50vw;
  }

  @media only screen and (min-width: 768px) {
    width: 18vw;
  }
`

export const SigninHeader = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};

  height: 100%;
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 300%;
  place-content: center;
  width: 100%;
`
