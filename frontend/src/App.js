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

// components
import Chemistry from './components/courses/Chemistry';
import English from './components/courses/English';
import Grammar from './components/courses/Grammar';
import Math from './components/courses/Math';
import Physics from './components/courses/Physics';
import Programming from './components/courses/Programming';

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

        {/* random subjects dummy data */}
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/english" element={<English />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/math" element={<Math />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/programming" element={<Programming />} />
        {/* end of dummy data */}
      </Routes>
    </Router>
  );
}

export default App;
