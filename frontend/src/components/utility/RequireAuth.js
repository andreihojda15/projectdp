/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  useLocation,
  Navigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthProvider';

export default function RequireAuth({ children, toggle }) {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);
  const location = useLocation();

  if (toggle && user) {
    if (cognitoConfirmed !== 'CONFIRMED') {
      return <Navigate to="/confirm-sign-up" state={{ from: location }} replace />;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  if (!toggle && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

RequireAuth.defaultProps = {
  toggle: false,
};

RequireAuth.propTypes = {
  children: PropTypes.any.isRequired,
  toggle: PropTypes.bool,
};
