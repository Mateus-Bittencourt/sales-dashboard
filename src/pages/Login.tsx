import { type ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '@components'
import { Box, Container, Grid } from '@mui/material'
import { pxToRem, jwtExpirationDateConverter } from '@utils'
import { useFormValidation, usePost } from '@hooks'
import type { MessageProps, LoginData, LoginPostData, DecodedJwt } from '@types'
import type { RootState } from '@redux'
import { useSelector } from 'react-redux'

function Login() {
  const navigate = useNavigate()
  const { email, message } = useSelector(
    (state: RootState) => state.createProfile
  )
  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Password' },
  ]
  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>(
    'login'
  )
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleMessage = (): MessageProps => {
    if (!error) return { msg: message || '', type: 'success' }
    switch (error) {
      case 401:
        return { msg: 'Invalid password/email', type: 'error' }
      default:
        return { msg: 'Unhandled error', type: 'error' }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      const decodedJwt: DecodedJwt = jwtDecode(data?.jwt_token)
      const expires = jwtExpirationDateConverter(decodedJwt.exp) || 99999
      console.log(expires)
      Cookies.set('Authorization', data?.jwt_token, {
        expires,
        secure: true,
      })
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])

  useEffect(() => {
    if (email) handleChange(0, email)
  }, [email])

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Welcome</StyledH1>
                <StyledP>Enter your password and email to log in</StyledP>
              </Box>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid || loading,
                    type: 'submit',
                    children: loading ? 'Wait...' : 'Login',
                    onClick: handleSubmit,
                  },
                ]}
                message={handleMessage()}
              />
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
