import styled from 'styled-components';
import Head from 'next/head';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
              alt='wapp logo'
        />
        <Button2 variant='outlined' >Sign in with Google</Button2>
      </LoginContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

const Button2 = styled(Button)`
  &&&{color: black; outline-color: white}
`;