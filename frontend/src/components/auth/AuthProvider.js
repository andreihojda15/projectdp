/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', '');
  const [cognitoConfirmed, setCognitoConfirmed] = useLocalStorage('cognitoConfirmed', '');

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={[
      user,
      setUser,
      cognitoConfirmed,
      setCognitoConfirmed,
    ]}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthProvider;
