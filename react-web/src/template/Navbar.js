import React from 'react';
import PropTypes from 'prop-types';
import '../input.css';

function Navbar(props) {
  const { value } = props;
  return (
    <nav className="bg-cyan-600 py-8">
      <p className="text-lg text-center font-medium text-white">
        { value }
      </p>
    </nav>
  );
}

Navbar.defaultProps = {
  value: 'Navbar',
};

Navbar.propTypes = {
  value: PropTypes.string,
};

export default Navbar;
