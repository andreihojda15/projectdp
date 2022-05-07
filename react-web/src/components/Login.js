import React from 'react';
import '../index.css';

function Login() {
  return (
    <div className="container">
      <div className="loginBar">
        <h1>Login</h1>
      </div>
      <div className="loginForm">
        <form>
          <label htmlFor="inputEmail">
            Email Address:
            <input type="text" id="inputEmail" placeholder="email" className="inputs" />
          </label>
          <label htmlFor="inputPass">
            Password:
            <input type="password" id="inputPass" placeholder="password" className="inputs" />
          </label>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don&apos;t have an account?&nbsp;
          <a href="/register">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
