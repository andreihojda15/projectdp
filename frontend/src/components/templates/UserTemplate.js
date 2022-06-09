/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer';
import AuthNavbar from '../common/AuthNavbar';

function UserTemplate({ children }) {
  return (
    <div className="h-screen w-full absolute flex flex-col items-center justify-start">
      <AuthNavbar />
      { children }
      <Footer />
    </div>
  );
}

UserTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};

export default UserTemplate;
