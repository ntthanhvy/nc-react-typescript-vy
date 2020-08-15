import styled from 'styled-components'

export const StyledLayout = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 20px 10%;

  @media only screen and (max-width: 768px) {
    padding: 20px 5%;
  }
`
