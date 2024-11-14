import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { login } from "../../services/authService";

// Style
import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: false, password: false });
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6;
  
    setError({
      email: !isEmailValid,
      password: !isPasswordValid,
    });
  
    if (!isEmailValid || !isPasswordValid) return;

    // Send a request with the validated credentials
    try {
      const res = await login({ email, password })

      res?.status === "200"
        ? navigate("/")
        : console.log('Login failed:', res?.data?.message || 'Unexpected error!')
    } catch (error) {
      console.error('Error logging in:', error)
    }
  };
  

  return (
    <Container component="main" maxWidth="xs" className="login-container">
      <Paper elevation={3} className="login-paper">
        <Typography variant="h5" className="login-title">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate>
          <TextField
            label="Email Address"
            variant="outlined"
            required
            fullWidth
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error.email}
            helperText={error.email ? "Please enter a valid email address" : ""}
            className="login-field"
          />
          <TextField
            label="Password"
            variant="outlined"
            required
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error.password}
            helperText={error.password ? "Password must be at least 6 characters" : ""}
            className="login-field"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="login-button"
          >
            Login
          </Button>
          <span className='login-navigator'>
            <Link className='link' to={"/auth/register"}>Register</Link> if you don't have an account.
          </span>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
