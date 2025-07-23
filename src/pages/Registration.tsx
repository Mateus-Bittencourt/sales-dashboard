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
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Create your account</StyledH1>
                <StyledP>First, tell us who you are.</StyledP>
                <StyledUl>
                  <li>Between 8 and 16 characters;</li>
                  <li>At least one uppercase letter;</li>
                  <li>At least one special character.</li>
                  <li>At least one number</li>
                </StyledUl>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'text', placeholder: 'Full name' },
                  { type: 'email', placeholder: 'Email' },
                  {
                    type: 'phone',
                    placeholder: 'Phone',
                  },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Next' },
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
