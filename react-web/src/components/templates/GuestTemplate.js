/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../common/Navbar';

function GuestTemplate({ title, children }) {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmPassword: '',
    token: '',
    errors: '',
  });

  const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, { userInput, setUserInput }));

  return (
    <>
      <Navbar title={title} />

      {/* here we have just the form */}
      { childrenWithProps }
    </>

  );
}

GuestTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default GuestTemplate;
