/* eslint-disable max-len */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './common/Navbar';

function Profile() {
  return (
    <>
      <Navbar title="Profile" />
      <div className="flex justify-center">
        <div className="bg-sky-300 border-sky-900 h-[350px] w-[400px] rounded-2xl text-center my-36 shadow-[1px_1px_15px_-1px_#000000]">
          <Link to="/" className="relative top-4 left-1">
            <img src={require('../imgs/arrow.png')} alt="arrow go back" className="w-10" />
          </Link>
          <img src={require('../imgs/user.png')} alt="user profile" className="w-20 my-5 mb-2 m-auto" />
          <button type="button" className="my-3 bg-sky-800 hover:bg-sky-600 rounded text-white p-1">Change profile picture</button>
          <p className="mb-2">Username: Your username goes here</p>
          <p className="mb-2">Email: Your email goes here</p>
          <Link to="/forgot-password">
            <button type="button" className="m-2 rounded bg-sky-800 text-white hover:bg-sky-600 p-1">Change password</button>
          </Link>
          <Link to="/login">
            <button type="button" className="m-2 rounded bg-sky-800 text-white hover:bg-sky-600 p-1">Sign out</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
