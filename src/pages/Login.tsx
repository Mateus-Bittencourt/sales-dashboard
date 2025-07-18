import styled from 'styled-components'

const LoginArea = styled.div`
  background: #666;
`

const LoginImage = styled.img`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return (
    <>
      <LoginArea>
        <div>Login Page</div>
      </LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
