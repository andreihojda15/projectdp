/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utility/AuthProvider';

import handleChange from '../../../functions/handleChange';

function Login({
  // eslint-disable-next-line no-unused-vars
  userInput, setUserInput,
}) {
  const navigate = useNavigate();
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);

  async function submitForm(e) {
    e.preventDefault();
    console.log(userInput);

    const auth = await axios.post('https://jtbnq8amm6.execute-api.us-east-1.amazonaws.com/login', {
      email: userInput.email,
      password: userInput.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      if (response.data && response.data.statusCode && response.data.statusCode !== 200) {
        handleChange(setUserInput, 'errors', response.data.message);
      }
      return response;
    })
      .catch((error) => {
        handleChange(setUserInput, 'errors', error.message);
      });
    if (auth.status !== 200) {
      handleChange(setUserInput, 'errors', 'Error logging in.');
      return;
    }

    await axios.post(
      'https://jtbnq8amm6.execute-api.us-east-1.amazonaws.com/get-user',
      { accessToken: auth.data.AuthenticationResult.AccessToken },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(async (response) => {
      let confirmed = 'UNCONFIRMED';
      if (response.data.email_verified || response.data.phone_number_verified) {
        confirmed = 'CONFIRMED';
      }
      await Promise.all(
        [setUser(response.data.sub), setCognitoConfirmed(confirmed)],
      );
    })
      .then(() => navigate('/'))
      .catch((error) => {
        handleChange(setUserInput, 'errors', error.message);
      });
  }

  return (

    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/5 flex flex-col w-4/5 justify-self-center">
      <div className="mb-4">
        <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="username">
          E-mail
          <input
            className="shadow appearance-none border rounded w-full
          py-2 px-3 text-grey-900"
            id="username"
            type="text"
            placeholder="E-mail"
            onChange={(e) => handleChange(setUserInput, 'email', e.target.value)}
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-grey-900 text-sm font-bold mb-2" htmlFor="password">
          Password
          <input
            className="shadow
          appearance-none border border-red rounded w-full py-2 px-3 text-grey-900 mb-3"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => handleChange(setUserInput, 'password', e.target.value)}
          />
        </label>
        {userInput.errors && <p className="text-red-700 text-xs italic">{userInput.errors}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="text-white bg-blue-700 hover:bg-blue-900 font-bold
        py-2 px-4 rounded"
          type="button"
          onClick={(e) => submitForm(e)}
        >
          Sign In
        </button>
        <a href="/register" className="inline-block align-baseline font-bold text-sm text-blue-700  hover:text-blue-900">
          Create an Account
        </a>
      </div>
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

export default Login;
