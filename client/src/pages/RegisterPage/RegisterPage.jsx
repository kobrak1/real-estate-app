import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { login } from "../../services/authService";

// Style
import './RegisterPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({ email: false, password: false, passwordConfirmation: false, match: false });

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if fields are empty and if passwords match
    const hasError = {
      email: email === '',
      username: username === '',
      password: password === '',
      passwordConfirmation: passwordConfirmation === '',
      match: password !== passwordConfirmation,
    };

    setError(hasError);

    // If any error is true, don't proceed
    if (Object.values(hasError).some((err) => err)) {
      return;
    }

    console.log('Logging in with:', { email, password });
  };

  return (
    <Container component="main" maxWidth="xs" className="login-container">
      <Paper elevation={3} className="login-paper">
        <Typography variant="h5" className="login-title">
          Register
        </Typography>
        <Box className='login-form' component="form" onSubmit={handleLogin} noValidate>
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
            helperText={error.email && "Email is required"}
            className="login-field"
          />
          <TextField
            label="Username"
            variant="outlined"
            required
            fullWidth
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error.username}
            helperText={error.username && "Username is required"}
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
            helperText={error.password && "Password is required"}
            className="login-field"
          />
          <TextField
            label="Password Confirmation"
            variant="outlined"
            required
            fullWidth
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            error={error.passwordConfirmation || error.match}
            helperText={error.passwordConfirmation ? "Confirm your password" : error.match && "Passwords do not match"}
            className="login-field"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="login-button"
          >
            Register
          </Button>
          <span className='login-navigator'>
            <Link className='link' to={"/auth/login"}>Login</Link> if you already have an account.
          </span>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
