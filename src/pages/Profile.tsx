import { useContext } from 'react'
import { CardComponent, Header, StyledButton, StyledH2 } from '@components'
import { AppThemeContext } from '@contexts/AppThemeContext'
import { Container, Grid } from '@mui/material'
import { logout } from '@services'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardComponent>Your Data....</CardComponent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2 className="mb-1">Account settings</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Switch to{' '}
                {themeContext?.appTheme === 'light' ? 'dark' : 'light'} theme
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
