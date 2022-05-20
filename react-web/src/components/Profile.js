/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../template/Navbar';

function Profile() {
  return (
    <div className="">
      <Navbar value="Profile" />
      <div className="bg-sky-200 flex justify-center gap-4">
        <h1 className="text-4xl">Hi, user! Here you can change your password</h1>
        <p>Your name goes here</p>
        <Link to="/forgot-password">
          <button type="button" className="border rounded border-black bg-white hover:bg-slate-50">Change password</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
