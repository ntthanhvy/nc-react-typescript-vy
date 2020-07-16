import styled from 'styled-components'
import { Button } from '../ui-kits'

export const ProductContainer = styled.div`
  width: 100%;
  margin: 0 -15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: ${(props) => props.blockView && 'row wrap'};
  flex-flow: ${(props) => props.listView && 'column'};
`

export const SelectView = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SelectOpt = styled.div`
  width: 31px;
  height: 31px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5px;

  &:hover {
    opacity: 90%;
    cursor: pointer;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`

export const Btn = styled(Button)`
    background-color: ${(props) => props.theme.colors.blue1};
    border-radius: 100px;
    width: 160px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.light}

    &:hover {
      background-color: white;
      border: 1px solid ${(props) => props.theme.colors.blue1};
      color: ${(props) => props.theme.colors.blue1};
    }
`