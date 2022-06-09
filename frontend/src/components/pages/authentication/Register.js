/* eslint-disable no-unused-vars */
/* eslint-disable no-promise-executor-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utility/AuthProvider';

import handleChange from '../../../functions/handleChange';

function Register({
  // eslint-disable-next-line no-unused-vars
  userInput, setUserInput,
}) {
  const navigate = useNavigate();
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);

  async function submitForm(e) {
    e.preventDefault();
    console.log(userInput);
    if (userInput.password !== userInput.confirmPassword) {
      handleChange(setUserInput, 'errors', 'Passwords do not match');
      return;
    }
    axios.post('https://jtbnq8amm6.execute-api.us-east-1.amazonaws.com/register', {
      family_name: userInput.lastName,
      given_name: userInput.firstName,
      picture: userInput.picture,
      phone_number: userInput.phone_number,
      email: userInput.email,
      password: userInput.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.data);
        if (response.data && response.data.statusCode && response.data.statusCode !== 200) {
          handleChange(setUserInput, 'errors', response.data.message);
          return;
        }
        setUser(response.data.UserSub);
        setCognitoConfirmed(response.data.UserConfirmed);
        console.log(user);
      })
      .then(() => navigate('/confirm-signup'))
      .catch((error) => {
        handleChange(setUserInput, 'errors', error.message);
        console.error('There was an error!', error);
      });
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/5 flex flex-col w-4/5 justify-self-center">
      <div className="grid grid-cols-2 gap-4">
        {[
          ['firstName', 'First Name', 'text'],
          ['lastName', 'Last Name', 'text'],
        ].map(([attribute, placeholder, inputType]) => (
          <div className="mb-4" key={attribute}>
            <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor={attribute}>
              {placeholder}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-900"
                id={attribute}
                type={inputType}
                placeholder={placeholder}
                onChange={(e) => handleChange(setUserInput, attribute, e.target.value)}
              />
            </label>
          </div>
        ))}

      </div>
      {[
        ['email', 'E-mail Address', 'xxxx@xxxx.xxx', 'email'],
        ['phone_number', 'Phone Number', '1234567890', 'text'],
        ['password', 'Password', '**************', 'password'],
        ['confirmPassword', 'Retype Password', '**************', 'password'],
      ].map(([attribute, label, placeholder, inputType]) => (
        <div className="mb-4" key={attribute}>
          <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor={attribute}>
            {label}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-900"
              id={attribute}
              type={inputType}
              placeholder={placeholder}
              onChange={(e) => handleChange(setUserInput, attribute, e.target.value)}
            />
          </label>
        </div>
      ))}
      <div className="mb-6">
        <div className="flex justify-center">
          <div className="mb-3 w-96">
            <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">
              Pick a profile picture
              <input
                className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
                onChange={(e) => handleChange(setUserInput, 'picture', e.target.value)}
              />
            </label>
          </div>
        </div>
        {userInput.errors && <p className="text-red-700 text-xs italic">{userInput.errors}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          className="text-white bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded"
          type="button"
          onClick={(e) => submitForm(e)}
        >
          Sign Up
        </button>
        <a href="/login" className="inline-block align-baseline font-bold text-sm text-blue-700  hover:text-blue-900">
          Log In
        </a>
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

export default Register;
