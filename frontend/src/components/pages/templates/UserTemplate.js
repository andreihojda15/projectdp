/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../auth/AuthProvider';
import Footer from '../common/Footer';
import AuthNavbar from '../../common/AuthNavbar';

function UserTemplate({ title, children }) {
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);

  return (
    <div className="h-screen w-full absolute flex flex-col items-center justify-start">
      <AuthNavbar />
      { children }
      <Footer />
    </div>
  );
}

UserTemplate.defaultProps = {
  title: 'No title',
};

UserTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};

export default UserTemplate;
