import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '@components'
import { Box, Container, Grid } from '@mui/material'
import { pxToRem } from '@utils'

function Login() {
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
                inputs={[
                  {
                    type: 'email',
                    placeholder: 'Email',
                    name: 'username',
                    disabled: true,
                  },
                  {
                    type: 'password',
                    placeholder: 'Password',
                    name: 'password',
                  },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'Login',
                    disabled: true,
                  },
                ]}
                message={{ type: 'error', msg: 'Invalid credentials' }}
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
