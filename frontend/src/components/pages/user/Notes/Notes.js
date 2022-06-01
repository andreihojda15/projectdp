/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Notes({ batch }) {
  const groups = [
    'Timisoara',
    'Romania',
    'Friends',
    'Guys',
    'Girls',
    'Boys',
    'AAAaaa',
    'Default',
    'Whatever',
  ];

  const [page, setPage] = useState(0);

  function setPageNumber(number) {
    let newPage = page + number;
    if (newPage < 0) {
      newPage = 0;
    }
    while (newPage * batch >= groups.length) {
      newPage -= 1;
    }
    setPage(newPage);
  }

  function getRandomInt(max) {
    const res = Math.floor(Math.random() * max);
    if (res === 0) {
      return 1;
    }
    return res;
  }

  return (
    <div className="w-4/5 justify-center items-center text-center">
      <div className="flex flex-row justify-between items-center">
        <a href="/notes"><p className="font-bold text-3xl lg:text-left p-2">Notes</p></a>
        <a href="/add-note">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </a>
      </div>
      <hr />
      <br />
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-center items-center">
        {groups.slice(page * batch, (page + 1) * batch).map((group) => {
          const img = getRandomInt(7);
          return (
            <Link to="/note" className="bg-slate-700 text-white rounded flex flex-col" key={group}>
              {group}
              <img src={require(`../../../../imgs/pic${img}.jpg`)} alt={group} className="w-60 h-40 rounded object-fit self-center" />
            </Link>
          );
        })}
      </div>
      <div className="inline-flex mt-10 bg-gray-300 text-gray-800 font-bold">
        <button
          onClick={() => setPageNumber(-1)}
          className="hover:bg-gray-400 font-bold py-2 px-4 rounded-l"
          type="button"
        >
          Prev
        </button>
        <div className="self-center">
          {' '}
          Page
          {' '}
          {page + 1}
          /
          {Math.floor(groups.length / batch + 1)}

        </div>
        <button
          onClick={() => setPageNumber(1)}
          className="hover:bg-gray-400 font-bold py-2 px-4 rounded-r"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

Notes.defaultProps = {
  batch: 4,
};

Notes.propTypes = {
  batch: PropTypes.number,
};

export default Notes;
