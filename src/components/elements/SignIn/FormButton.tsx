import React from 'react'

import { StyledFormButton } from './SignIn.styled'
import { AiOutlineLoading } from 'react-icons/ai'

interface IFormButton {
  value?: string
  loading?: boolean
  disabled?: boolean
  outline?: boolean
}

const FormButton = ({ value, loading, disabled, outline }) => {
  return (
    <StyledFormButton type="submit" disabled={disabled}>
      {value} {loading && <AiOutlineLoading className="loading" />}
    </StyledFormButton>
  )
}

export default FormButton
