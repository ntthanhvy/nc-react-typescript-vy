import React from 'react'

import { StyledFormButton } from './StyledForm.styled'
import { AiOutlineLoading } from 'react-icons/ai'

interface IFormButton {
  type?: string
  value?: string
  loading?: boolean
  disabled?: boolean
  outline?: boolean
}

const FormButton = ({ children, loading, disabled, type, outline = false }) => {
  return (
    <StyledFormButton type={type} disabled={disabled}>
      {children} {loading && <AiOutlineLoading className="loading" />}
    </StyledFormButton>
  )
}

export default FormButton
