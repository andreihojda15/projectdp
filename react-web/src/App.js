import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import GuestTemplate from './components/templates/GuestTemplate';

// components
import Dashboard from './components/Dashboard';
import ChangePassword from './components/ChangePassword';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={(
            <GuestTemplate title="Login">
              <Login />
            </GuestTemplate>
      )}
        />
        <Route
          path="/register"
          element={(
            <GuestTemplate title="Register">
              <Register />
            </GuestTemplate>
      )}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/forgot-password"
          element={(
            <GuestTemplate title="Change Password">
              <ChangePassword />
            </GuestTemplate>
      )}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
