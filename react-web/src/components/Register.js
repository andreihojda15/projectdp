import React from 'react';
import '../index.css';

function Register() {
  return (
    <div className="container">
      <div className="registerBar">
        <h1>Sign in</h1>
      </div>
      <div className="registerForm">
        <form>
          <label htmlFor="inputFName">
            First name:
            <input type="text" id="inputPass" placeholder="first name" className="inputs" />
          </label>
          <label htmlFor="inputLName">
            Last name:
            <input type="text" id="inputLName" placeholder="last name" className="inputs" />
          </label>
          <label htmlFor="inputEmail">
            Email Address:
            <input type="text" id="inputEmail" placeholder="email" className="inputs" />
          </label>
          <label htmlFor="inputPhone">
            Phone number:
            <input type="text" id="inputPhone" placeholder="phone number" className="inputs" />
          </label>
          <label htmlFor="inputPass">
            Password:
            <input type="password" id="inputPass" placeholder="password" className="inputs" />
          </label>
          <label htmlFor="inputCPass">
            Repeat Password:
            <input type="password" id="inputCPass" placeholder="password" className="inputs" />
          </label>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
}

export default Register;
