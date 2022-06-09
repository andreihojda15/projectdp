/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../utility/AuthProvider';

import handleChange from '../../../functions/handleChange';

function ConfirmRegistration({
  // eslint-disable-next-line no-unused-vars
  userInput, setUserInput,
}) {
  const navigate = useNavigate();
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);

  console.log(user, cognitoConfirmed);

  async function submitForm(e) {
    e.preventDefault();
    console.log(userInput);

    axios.post('https://jtbnq8amm6.execute-api.us-east-1.amazonaws.com/confirm-sign-up', {
      email: userInput.email,
      code: userInput.token,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.data);
        if (response.data && response.data.statusCode && response.data.statusCode !== 200) {
          console.log('here');
          handleChange(setUserInput, 'errors', response.data.message);
          return;
        }
        setCognitoConfirmed('true');
        console.log(cognitoConfirmed);
      })
      .then(() => navigate('/'))
      .catch((error) => {
        handleChange(setUserInput, 'errors', error.message);
        console.error('There was an error!', error);
      });
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/5 flex flex-col w-4/5 justify-self-center">
      <div className="mb-4">
        <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="username">
          Confirmation Code
          <input
            className="shadow appearance-none
          border rounded w-full py-2 px-3 text-grey-900"
            id="username"
            type="text"
            placeholder="XXX-XXX"
            onChange={(e) => handleChange(setUserInput, 'token', e.target.value)}

          />
        </label>
        {userInput.errors && <p className="text-red-700 text-xs italic">{userInput.errors}</p>}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded"
          type="button"
          onClick={(e) => submitForm(e)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

ConfirmRegistration.defaultProps = {
  userInput: {},
  setUserInput: () => {},
};

ConfirmRegistration.propTypes = {
  userInput: PropTypes.object,
  setUserInput: PropTypes.func,
};

export default ConfirmRegistration;
