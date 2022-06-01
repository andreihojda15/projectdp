/* eslint-disable no-unused-vars */
import React from 'react';
import GuestTemplate from '../templates/GuestTemplate';
import UserTemplate from '../templates/UserTemplate';

import { AuthContext } from '../../auth/AuthProvider';

function ErrorPage() {
  const [user, setUser, cognitoConfirmed, setCognitoConfirmed] = React.useContext(AuthContext);

  if (user) {
    return (
      <UserTemplate>
        <div className="w-2/5 grid xl:grid-cols-3 md:grid-rows-3 gap-4 items-center justify-center text-center rounded lg:mt-20">
          <div className="text-7xl font-bold text-blue-900">404</div>
          <hr className="md:rotate-90 xl:rotate-90" />
          <div>Sorry, we couldn&apos;t find the item that you&apos;re looking for :(</div>
        </div>
      </UserTemplate>
    );
  }

  return (
    <GuestTemplate>
      <div className="w-2/5 grid xl:grid-cols-3 md:grid-rows-3 gap-4 items-center justify-center text-center rounded lg:mt-20">
        <div className="text-7xl font-bold text-blue-900">404</div>
        <hr className="md:rotate-90 xl:rotate-90" />
        <div>Sorry, we couldn&apos;t find the item that you&apos;re looking for :(</div>
      </div>
    </GuestTemplate>
  );
}

export default ErrorPage;
