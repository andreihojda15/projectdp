/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import '../../input.css';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  if (title !== 'Login' && title !== 'Register') {
    return (
      <nav className="bg-cyan-600 py-8">
        <p className="text-lg text-center font-medium text-white">
          { title }
        </p>
        <p className="absolute right-10 top-10 text-white">Username</p>
        <Link to="/profile">
          <img
            src={require('../../imgs/user.png')}
            alt="profile page"
            className="w-8 hover:cursor-pointer hover:bg-cyan-700 rounded-lg absolute right-0 top-8"
          />
        </Link>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
