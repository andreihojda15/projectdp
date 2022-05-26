/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import '../input.css';
import { Link } from 'react-router-dom';

// import functions
import handleChange from '../functions/handleChange';

export default function Login({ userInput, setUserInput }) {
  return (
    <div className="relative top-52 w-full flex justify-center">
      <form>
        {[
          ['email', 'email', 'E-mail'],
          ['password', 'password', 'Password'],
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
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-sky-600 underline hover:text-cyan-400">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

Login.defaultProps = {
  userInput: {},
  setUserInput: () => {},
};

Login.propTypes = {
  userInput: PropTypes.object,
  setUserInput: PropTypes.func,
};
