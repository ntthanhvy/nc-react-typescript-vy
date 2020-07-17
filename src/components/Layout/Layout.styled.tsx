import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 10%;

  @media only screen and (max-width: 768px) {
    padding: 20px 5%;
  }
`
