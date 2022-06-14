import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useRouter } from 'next/router';

import { useState, useEffect } from 'react'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Blogarithm
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const RegisterComp = () => {
  const router = useRouter()
  const [token, setToken] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '0.5px solid black',
          padding: 3
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography>Already have an Account ?</Typography>
            <Button onClick={() => router.push('/login')} sx={{textTransform: 'capitalize'}}> 
              Login
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 6, mb: 4 }} />
    </Container>
  );
}

export default RegisterComp