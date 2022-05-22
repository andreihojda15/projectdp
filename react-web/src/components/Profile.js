/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../template/Navbar';

function Profile() {
  return (
    <div className="">
      <Navbar value="Profile" />
      <div className="bg-sky-300 border border-sky-900 h-96 w-1/2 text-center rounded-full m-auto my-36">
        <div className="relative top-16">
          <img src={require('../imgs/user.png')} alt="user profile" className="w-20 mb-2 m-auto" />
          <button type="button" className="my-3 bg-sky-800 hover:bg-sky-600 rounded text-white p-1">Change profile picture</button>
          <p className="mb-2">Username: Your username goes here</p>
          <p className="mb-2">Email: Your email goes here</p>
          <Link to="/forgot-password">
            <button type="button" className="m-2 rounded bg-sky-800 text-white hover:bg-sky-600 p-1">Change password</button>
          </Link>
          <Link to="/login">
            <button type="button" className="m-2 rounded bg-sky-800 text-white hover:bg-sky-600 p-1">Sign out</button>
          </Link>
          <Link to="/">
            <button type="button" className="m-2 rounded bg-sky-800 text-white hover:bg-sky-600 p-1">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
