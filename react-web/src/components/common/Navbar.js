import React from 'react';
import PropTypes from 'prop-types';
import '../../input.css';

function Navbar({ title }) {
  return (
    <nav className="bg-cyan-600 py-8">
      <p className="text-lg text-center font-medium text-white">
        { title }
      </p>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
