import React from 'react';
import { Link } from 'react-router-dom';
import './AuthFallbackUI.scss';

const AuthFallbackUI = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/auth/login" className="auth-login-link">Go back to login page</Link>
      </div>
    </div>
  );
};

export default AuthFallbackUI;
