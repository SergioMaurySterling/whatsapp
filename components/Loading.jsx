/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <center style={{display: "grid", placeItems:"center", height: "100vh"}}>
      <Container>
        <img
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
          alt='wapp logo'
          style={{ marginBottom: 10}}
          height={200}
        />
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </Container>
    </center>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
