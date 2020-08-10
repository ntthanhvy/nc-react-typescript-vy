import React from 'react'

import { StyledSearchInput, SearchIcon } from './ProductList.styled'

interface ISearchInput {
  containerClassName?: string
  className?: string
  value?: string
  type?: string
  placeholder?: string
  onChange?: (e) => void
  onFinish?: (e) => void
  searchIconContainer?: string
  searchIcon?: React.ReactNode
  children?: React.ReactNode
}

/**
 *
 * @param props
 * containerClassName: className of Input container
 *
 */
export const SearchInput: React.FC<ISearchInput> = (props) => {
  return (
    <StyledSearchInput className={props.containerClassName}>
      {props.children}
      {props.searchIcon && (
        <SearchIcon className={props.searchIconContainer}>{props.searchIcon}</SearchIcon>
      )}
    </StyledSearchInput>
  )
}

export default SearchInput
