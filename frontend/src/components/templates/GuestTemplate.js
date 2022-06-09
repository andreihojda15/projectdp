/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utility/AuthProvider';
import GuestNavbar from '../common/GuestNavbar';
import Footer from '../common/Footer';

function GuestTemplate({ children }) {
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
      { childrenWithProps }
      <Footer />
    </div>

  );
}

GuestTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};

export default GuestTemplate;
