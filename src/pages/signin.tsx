import React from 'react'
import Router from 'next/router'

import {
  StyledSignin,
  SigninBox,
  SigninHeader,
  SigninForm,
  StyledFormControl,
  StyledFormInput,
  StyledFormLabel,
} from '../components/elements/SignIn/SignIn.styled'
import StyledFormButton from '../components/elements/SignIn/FormButton'

import { SIGN_IN } from '../graphql/auth/signin.graphql'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import { setToken } from '../utils/service'

const SignIn = () => {
  const [signIn, { loading, called, error, data }] = useMutation(SIGN_IN)

  const onSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')

    signIn({ variables: { input: { email, password } } })
  }

  if (called && !loading && data?.signIn) {
    setToken(data.signIn.accessToken)
    Router.push('/')
  }

  return (
    <StyledSignin>
      <SigninBox>
        <SigninHeader>Sign In</SigninHeader>
        <SigninForm onSubmit={onSubmit}>
          <StyledFormControl>
            <StyledFormLabel>Email: </StyledFormLabel>
            <StyledFormInput
              type="email"
              className="form-control"
              placeholder="abc@gmail.com"
              name="email"
            />
          </StyledFormControl>
          <StyledFormControl>
            <StyledFormLabel>Password: </StyledFormLabel>
            <StyledFormInput
              type="password"
              className="form-control"
              placeholder="abc@gmail.com"
              name="password"
            />
          </StyledFormControl>
          <StyledFormButton type="submit" value="SIGN IN" disabled={called && loading} />
        </SigninForm>
      </SigninBox>
    </StyledSignin>
  )
}

export default withApollo({ ssr: true })(SignIn)
