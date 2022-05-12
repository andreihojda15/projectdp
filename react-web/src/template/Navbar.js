import React from 'react';
import PropTypes from 'prop-types';
import '../input.css';

function Auth(props) {
  const { value } = props;
  return (
    <nav className="bg-cyan-600">
      <div className="py-10">
        <p className="text-center font-medium text-white">
          { value }
        </p>
      </div>
    </nav>
  );
}

Auth.defaultProps = {
  value: 'Navbar',
};

Auth.propTypes = {
  value: PropTypes.string,
};

export default Auth;
