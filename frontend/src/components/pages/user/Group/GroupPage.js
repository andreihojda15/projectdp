/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Categories from '../Categories/Categories';
import Notes from '../Notes/Notes';

const dummyGroupData = {
  name: 'Grupul ITistilor',
  owner: 'Mihai Grecu',
  admins: ['Marius George', 'Aurel Vlaicu'],
  members: 51,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

function GroupPage() {
  return (
    <>
      <div className="flex flex-col w-4/5 items-center justify-center mb-10">
        <h2 className="self-start px-20 pb-5 font-bold text-2xl">{dummyGroupData.name}</h2>
        <div className="grid xl:grid-cols-2 xl:grid-rows-1 md:grid-rows-2 text-center w-full">
          <div className="flex flex-col justify-center items-start px-20">
            <span className="p-2 border-b w-full">
              Owner:
              {' '}
              {dummyGroupData.owner}
            </span>
            <div className="p-2 border-b w-full">
              Admins:
              {' '}
              {dummyGroupData.admins.map((admin) => <span className="mr-2" key={admin}>{admin}</span>)}
            </div>
            <span className="p-2 border-b w-full">
              Members:
              {' '}
              {dummyGroupData.members}
            </span>
            <span className="p-2 border-b w-full">
              Categories:
              {' '}
              {dummyGroupData.members}
            </span>
            <span className="p-2 border-b w-full">
              Notes:
              {' '}
              {dummyGroupData.members}
            </span>
          </div>
          <div className="italic bg-gray-50 p-5 rounded">{dummyGroupData.description}</div>
        </div>
      </div>
      <Categories />
      <br />
      <br />
      <Notes />
    </>
  );
}

export default GroupPage;
