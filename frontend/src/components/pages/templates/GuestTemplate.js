/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import GuestNavbar from '../../common/GuestNavbar';
import Footer from '../common/Footer';

function GuestTemplate({ title, children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useContext(AuthContext);

  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone_number: '',
    picture: '',
    password: '',
    confirmPassword: '',
    token: '',
    errors: '',
  });

  const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, {
    userInput, setUserInput, navigate, user, setUser,
  }));

  return (
    <div className="h-screen w-full absolute flex flex-col items-center justify-start">
      <GuestNavbar />
      {/* here we have just the form */}
      { childrenWithProps }
      <Footer />
    </div>

  );
}

GuestTemplate.defaultProps = {
  title: 'No title',
};

GuestTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};

export default GuestTemplate;
