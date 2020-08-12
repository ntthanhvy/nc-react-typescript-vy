import React from 'react'
import { useRouter } from 'next/router'

import { StyledSignin, SigninBox, SigninHeader } from '../components/elements/SignIn/SignIn.styled'
import { Form } from '../components/ui-kits'
import StyledFormButton from '../components/ui-kits/Form/FormButton'

import { SIGN_IN } from '../graphql/auth/signin.graphql'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import { setToken, getToken } from '../utils/service'

const SignIn = () => {
  const [signIn, { loading, called, error, data }] = useMutation(SIGN_IN)
  const router = useRouter()
  const onSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')

    signIn({ variables: { input: { email, password } } })
  }

  if (called && error) {
    alert(error.toString())
  }

  if (called && !loading && data?.signIn) {
    setToken(data.signIn.accessToken)
  }

  React.useEffect(() => {
    if (called && !loading && getToken()) router.back()
  }, [router, loading])

  return (
    <StyledSignin>
      <SigninBox>
        <SigninHeader>Sign In</SigninHeader>
        <Form onSubmit={onSubmit}>
          <Form.Item>
            <Form.Label>Email: </Form.Label>
            <Form.Input
              required
              type="email"
              className="form-control"
              placeholder="abc@gmail.com"
              name="email"
            />
          </Form.Item>
          <Form.Item>
            <Form.Label>Password: </Form.Label>
            <Form.Input
              required
              type="password"
              className="form-control"
              placeholder="*******"
              name="password"
            />
          </Form.Item>
          <Form.Button type="submit" disabled={called || loading} loading={loading}>
            SIGN IN
          </Form.Button>
        </Form>
      </SigninBox>
    </StyledSignin>
  )
}

export default withApollo({ ssr: true })(SignIn)
