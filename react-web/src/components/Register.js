/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import '../input.css';

// import functions
import handleChange from '../functions/handleChange';

export default function Register({ userInput, setUserInput }) {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-1/4 w-full flex justify-center">
        <form>
          {[
            ['firstName', 'text', 'First Name'],
            ['lastName', 'text', 'Last Name'],
            ['email', 'email', 'E-mail'],
            ['phonenumber', 'text', 'Phone Number'],
            ['password', 'password', 'Password'],
            ['confirmPassword', 'password', 'Confirm Password'],
          ].map(([name, type, label]) => (
            <label htmlFor={name} className="py-3 block" key={label}>
              {label}
              :
              <input
                type={type}
                id={name}
                className="border border-black rounded block w-60 indent-2"
                onChange={(e) => handleChange(setUserInput, name, e.target.value)}
              />
            </label>
          ))}
          <input
            type="submit"
            className="bg-white border border-black w-20 mt-4 rounded relative left-1/3 hover:bg-slate-200 cursor-pointer"
            value="Sign in"
            onClick={(e) => {
              e.preventDefault();
              console.log(userInput);
            }}
          />
          <p className="py-4">
            Already have an account?
            {' '}
            <a href="/login" className="text-sky-600 underline hover:text-cyan-400">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

Register.defaultProps = {
  userInput: {},
  setUserInput: () => {},
};

Register.propTypes = {
  userInput: PropTypes.object,
  setUserInput: PropTypes.func,
};
