import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// auth
import RequireAuth from './components/utility/RequireAuth';
import AuthProvider from './components/utility/AuthProvider';

// development
import LoginPage from './components/pages/authentication/Login';
import GuestTemplatePage from './components/templates/GuestTemplate';
import LandingPage from './components/common/LandingPage';
import RegisterPage from './components/pages/authentication/Register';
import ForgotPassword from './components/pages/authentication/ForgotPassword';
import ConfirmRegistration from './components/pages/authentication/ConfirmRegistration';
import ErrorPage from './components/pages/authentication/ErrorPage';
import UserTemplate from './components/templates/UserTemplate';

import Groups from './components/pages/user/Group/Groups';
import Categories from './components/pages/user/Categories/Categories';
import Notes from './components/pages/user/Notes/Notes';
import GroupPage from './components/pages/user/Group/GroupPage';
import CategoryPage from './components/pages/user/Categories/CategoryPage';
import NotePage from './components/pages/user/Notes/NotePage';
import Profile from './components/pages/user/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* development pages */}
          <Route
            path="login"
            element={(
              <RequireAuth toggle>
                <GuestTemplatePage>
                  <LoginPage />
                </GuestTemplatePage>
              </RequireAuth>
        )}
          />

          <Route
            path="register"
            element={(
              <RequireAuth toggle>
                <GuestTemplatePage>
                  <RegisterPage />
                </GuestTemplatePage>
              </RequireAuth>
        )}
          />

          <Route
            path="forgot-password"
            element={(
              <RequireAuth toggle>
                <GuestTemplatePage>
                  <ForgotPassword />
                </GuestTemplatePage>
              </RequireAuth>
        )}
          />

          <Route
            path="confirm-signup"
            element={(
              <RequireAuth toggle>
                <GuestTemplatePage>
                  <ConfirmRegistration />
                </GuestTemplatePage>
              </RequireAuth>
        )}
          />

          <Route
            path="/"
            element={(
              <LandingPage />
        )}
          />

          <Route
            path="groups"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <Groups batch={8} />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="categories"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <Categories batch={8} />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="notes"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <Notes batch={8} />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="group"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <GroupPage />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="category"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <CategoryPage />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="note"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <NotePage />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="add-note"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <NotePage status="new" />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="profile"
            element={(
              <RequireAuth>
                <UserTemplate>
                  <Profile />
                </UserTemplate>
              </RequireAuth>
        )}
          />

          <Route
            path="*"
            element={(
              <ErrorPage />
        )}
          />
          {/* end of development pages */}

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
