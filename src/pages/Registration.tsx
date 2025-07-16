import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #333;
`

const RegistrationImage = styled.img`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Registration() {
  return (
    <>
      <RegistrationArea>
        <div>Registration Page</div>
      </RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
