import React from 'react'
import { useRouter } from 'next/router'

import { StyledSignin, SigninBox, SigninHeader } from '../components/elements/SignIn/SignIn.styled'
import { Form } from '../components/ui-kits'
import StyledFormButton from '../components/ui-kits/Form/FormButton'

import { useMutation } from '@apollo/react-hooks'
import withApollo from '../utils/withApollo'
import { setToken, getToken } from '../utils/service'
import { SIGN_UP } from '../graphql/auth/signup.graphql'

const SignIn = () => {
  const [signUp, { called, error, data }] = useMutation(SIGN_UP)
  const [loading, setLoading] = React.useState<boolean>(false)

  const router = useRouter()

  const onSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')
    const fullName = formData.get('fullName')

    signUp({ variables: { input: { email, password, fullName } } })
      .then((res) => {
        setLoading(false)
        window.localStorage.clear()
        setToken(res.data.signUp.token)
        router.push('/')
      })
      .catch((err) => {
        setLoading(false)
        alert(err.message)
      })
  }

  return (
    <StyledSignin>
      <SigninBox>
        <SigninHeader>Sign Up</SigninHeader>
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
          <Form.Item>
            <Form.Label>Full name: </Form.Label>
            <Form.Input required className="form-control" placeholder="John Doe" name="fullName" />
          </Form.Item>
          <Form.Button type="submit" disabled={called || loading} loading={loading}>
            SIGN UP
          </Form.Button>
        </Form>
      </SigninBox>
    </StyledSignin>
  )
}

export default withApollo({ ssr: true })(SignIn)
