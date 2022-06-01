import React from 'react';
import Categories from './Categories/Categories';
import Groups from './Group/Groups';
import Notes from './Notes/Notes';

function LandingPageUser() {
  return (
    <>
      <Groups />
      <br />
      <br />
      <Categories />
      <br />
      <br />
      <Notes />
    </>

  );
}

export default LandingPageUser;
