import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent } from '@components'

function Registration() {
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
              <h1>Registration</h1>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email', name: 'username' },
                  {
                    type: 'password',
                    placeholder: 'Password',
                    name: 'password',
                  },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
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

export default Registration
