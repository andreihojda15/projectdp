/* eslint-disable no-unused-vars */
import React from 'react';
import About from './About';
import Contact from './Contact';
import Categories from '../pages/user/Categories/Categories';
import Groups from '../pages/user/Group/Groups';
import Notes from '../pages/user/Notes/Notes';

import GuestTemplate from '../templates/GuestTemplate';
import UserTemplate from '../templates/UserTemplate';

import { AuthContext } from '../utility/AuthProvider';

function LandingPage() {
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);

  if (user) {
    return (
      <UserTemplate>
        <>
          <Groups />
          <br />
          <br />
          <Categories />
          <br />
          <br />
          <Notes />
        </>
      </UserTemplate>
    );
  }
  return (
    <GuestTemplate>
      <>
        <About />
        <Contact />
      </>

    </GuestTemplate>
  );
}

export default LandingPage;
