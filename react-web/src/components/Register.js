import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Register() {
  return (
    <div>
      <h1>Register Page!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">LandingPage</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/forgot-password">ForgotPassword</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Register;
