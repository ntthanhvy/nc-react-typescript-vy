import React from 'react'
import { useRouter } from 'next/router'

import { StyledSignin, SigninBox, SigninHeader } from '../components/elements/SignIn/SignIn.styled'
import { Form } from '../components/ui-kits'

import { SIGN_IN } from '../graphql/auth/signin.graphql'
import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import { setToken, getToken } from '../utils/service'

const SignIn = () => {
  const [signIn, { called, error, data }] = useMutation(SIGN_IN)
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter()

  const onSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')

    signIn({ variables: { input: { email, password } } })
      .then((res) => {
        setLoading(false)
        window.localStorage.clear()
        setToken(res.data.signIn.accessToken)

        formData.set('email', '')
        formData.set('password', '')
        router.push('/')
      })
      .catch((error) => {
        setLoading(false)

        formData.set('email', '')
        formData.set('password', '')
        alert(error.toString())
      })
  }

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
          <Form.Button type="submit" loading={loading}>
            SIGN IN
          </Form.Button>
        </Form>
      </SigninBox>
    </StyledSignin>
  )
}

export default withApollo({ ssr: true })(SignIn)
