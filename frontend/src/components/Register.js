/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import '../input.css';
import { Link } from 'react-router-dom';

// import functions
import handleChange from '../functions/handleChange';
import signUp from '../functions/authentication';

export default function Register({ userInput, setUserInput }) {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-1/4 w-full flex justify-center">
        <form>
          {[
            ['firstName', 'text', 'First Name'],
            ['lastName', 'text', 'Last Name'],
            ['email', 'email', 'E-mail'],
            ['phone_number', 'text', 'Phone Number'],
            ['password', 'password', 'Password'],
            ['confirmPassword', 'password', 'Confirm Password'],
            ['picture', 'file', 'Select Picture'],
          ].map(([name, type, label]) => (
            type === 'file'
              ? (
                <div className="mb-3" key={label}>
                  <label
                    htmlFor={name}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {label}
                  </label>
                  <input
                    className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id={name}
                    type={type}
                    onChange={(e) => handleChange(setUserInput, name, e.target.value)}
                  />
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                </div>
              )
              : (
                <div className="mb-3" key={label}>
                  <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" key={label}>
                    {label}
                  </label>
                  <input
                    type={type}
                    id={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => handleChange(setUserInput, name, e.target.value)}
                  />
                </div>
              )
          ))}

          {userInput.errors && (
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">Error detected</p>
            <p>{userInput.errors}</p>
          </div>
          )}

          <button
            type="submit"
            className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={async (e) => {
              e.preventDefault();
              await signUp(userInput, setUserInput);
            }}
          >
            Register new account
          </button>

          <p className="py-4">
            Already have an account?
            {' '}
            <Link to="/login" className="text-sky-600 underline hover:text-cyan-400">Log in</Link>
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
