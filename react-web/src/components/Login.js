import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Login() {
  return (
    <div>
      <div className="loginBar">
        <h1>Login</h1>
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
      <div className="loginForm">
        <form>
          <label htmlFor="inputEmail">
            Email Address:
            <input type="text" id="inputEmail" placeholder="Email" />
          </label>
          <label htmlFor="inputPass">
            Password:
            <input type="text" id="inputPass" placeholder="password" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
