import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
  StyledUl,
} from '@components'
import { pxToRem } from '@utils'
import { useFormValidation, usePost } from '@hooks'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@redux'
import { setMessage, setProfileData } from '@redux/slice/createProfile'
import type { CreateProfileData, InputProps } from '@types'
import { type ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { email } = useSelector((state: RootState) => state.createProfile)
  const { data, error, loading, postData } = usePost<string, CreateProfileData>(
    'profile/create'
  )

  const step1Inputs: InputProps[] = [
    { type: 'text', placeholder: 'Full name', name: 'name', required: true },
    { type: 'email', placeholder: 'Email', name: 'email' },
    { type: 'phone', placeholder: 'Phone', name: 'phone', required: true },
  ]

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      setProfileData({
        email: String(step1FormValues[1]),
      })
    )
  }

  const {
    formValues: step1FormValues,
    formValid: step1FormValid,
    handleChange: step1HandleChange,
  } = useFormValidation(step1Inputs)

  const step2Inputs: InputProps[] = [
    { type: 'password', placeholder: 'Password', name: 'password' },
  ]

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      name: String(step1FormValues[0]),
      email: String(step1FormValues[1]),
      phone: String(step1FormValues[2]),
      password: String(step2FormValues[0]),
    })
  }

  const {
    formValues: step2FormValues,
    formValid: step2FormValid,
    handleChange: step2HandleChange,
  } = useFormValidation(step2Inputs)

  const handleStepInputs = email ? step2Inputs : step1Inputs

  useEffect(() => {
    if (data && !error) {
      dispatch(setMessage('Account created successfully.'))
      navigate('/')
    }
    if (error) alert('Error creating account, please try again.')
  }, [data, error, navigate])

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
                <StyledH1>
                  {email ? 'Define your password' : 'Create your account'}
                </StyledH1>
                <StyledP>
                  {email
                    ? 'Your password must have at least:'
                    : 'First, tell us who you are.'}
                </StyledP>
                {email && (
                  <StyledUl>
                    <li>Between 8 and 16 characters;</li>
                    <li>At least one uppercase letter;</li>
                    <li>At least one special character.</li>
                    <li>At least one number</li>
                  </StyledUl>
                )}
              </Box>
              <FormComponent
                inputs={handleStepInputs.map((input, index) => ({
                  ...input,
                  value: email
                    ? step2FormValues[index] || ''
                    : step1FormValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    email
                      ? step2HandleChange(
                          index,
                          (e.target as HTMLInputElement).value
                        )
                      : step1HandleChange(
                          index,
                          (e.target as HTMLInputElement).value
                        ),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: email ? 'Create Account' : 'Next',
                    disabled: email
                      ? !step2FormValid || loading
                      : !step1FormValid || loading,
                    onClick: email ? handleStep2 : handleStep1,
                  },
                ]}
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

export default Registration
