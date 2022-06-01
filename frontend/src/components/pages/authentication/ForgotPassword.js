/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function ForgotPassword() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/5 flex flex-col w-4/5 justify-self-center">
      <div className="mb-4">
        <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="username">
          E-mail
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-900" id="username" type="text" placeholder="E-mail" />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-grey-900 text-sm font-bold mb-2" htmlFor="password">
          Password
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-900 mb-3" id="password" type="password" placeholder="******************" />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-grey-900 text-sm font-bold mb-2" htmlFor="password">
          New Password
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-900 mb-3" id="password" type="password" placeholder="******************" />
        </label>
        <p className="text-red-700 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-white bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded" type="button">
          Reset Password
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-700  hover:text-blue-900" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;
