/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import userImage from '../../../imgs/user.jpg';
import Categories from './Categories/Categories';
import Groups from './Group/Groups';
import Notes from './Notes/Notes';

const cognitoUser = {
  firstName: ['First Name', 'Razvan'],
  lastName: ['Last Name', 'Tamsa'],
  email: ['E-mail Address', 'razvantamsa@gmail.com'],
  phone_number: ['Phone Number', '+40733896986'],
};

function Profile() {
  const [hidden, setHidden] = useState('hidden');

  function toggleAccordion(e) {
    e.preventDefault();
    if (!hidden) {
      setHidden('hidden');
    } else {
      setHidden('');
    }
  }

  return (
    <>
      <div className="w-4/5 grid md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4 text-center">
        <div className="flex flex-col justify-center items-center">
          <img className="w-2/5 h-fit rounded mb-5" src={userImage} alt="user" />
          <input
            className="form-control
            w-2/5
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          {Object.entries(cognitoUser).map(([key, value]) => (
            <span className="p-2 border-b w-full">
              {value[0]}
              :
              {' '}
              {value[1]}
            </span>
          ))}
        </div>
      </div>
      <br />
      <br />

      <Groups />
      <Categories />
      <Notes />
    </>
  );
}

export default Profile;
