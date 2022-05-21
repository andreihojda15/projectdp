/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import '../input.css';

// import functions
import handleChange from '../functions/handleChange';

export default function ChangePassword({ userInput, setUserInput }) {
  return (
    <div className="relative top-52 flex justify-center">
      <form className>
        {[
          ['token', 'text', 'Confirmation Token'],
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
          className="rounded border-black border my-4 bg-white hover:bg-slate-100 w-24 cursor-pointer relative left-1/4"
          value="Sign in"
          onClick={(e) => {
            e.preventDefault();
            console.log(userInput);
          }}
        />
      </form>
    </div>
  );
}

ChangePassword.defaultProps = {
  userInput: {},
  setUserInput: () => {},
};

ChangePassword.propTypes = {
  userInput: PropTypes.object,
  setUserInput: PropTypes.func,
};
