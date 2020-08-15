import React from 'react'
import { StyledForm, StyledFormControl, StyledFormLabel, StyledInput } from './StyledForm.styled'
import FormButton from './FormButton'

const Form = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

export const FormItem = ({ children }) => {
  return <StyledFormControl>{children}</StyledFormControl>
}

Form.Item = FormItem
Form.Label = StyledFormLabel
Form.Input = StyledInput
Form.Button = FormButton

export default Form
