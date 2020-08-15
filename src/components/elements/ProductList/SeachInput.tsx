import React from 'react'

import { StyledSearchInput, SearchIcon } from './ProductList.styled'

interface ISearchInput {
  containerClassName?: string
  className?: string
  value?: string
  type?: string
  placeholder?: string
  onChange?: (e) => void
  onSubmitInput?: (e) => void
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
    <StyledSearchInput
      target="_top"
      rel="search"
      onSubmit={props.onSubmitInput}
      className={props.containerClassName}
    >
      {props.children}
      {props.searchIcon && (
        <SearchIcon onClick={props.onSubmitInput} className={props.searchIconContainer}>
          {props.searchIcon}
        </SearchIcon>
      )}
    </StyledSearchInput>
  )
}

export default SearchInput
