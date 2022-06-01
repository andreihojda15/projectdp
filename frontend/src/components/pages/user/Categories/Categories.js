/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Categories({ batch }) {
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
  const [modal, setModal] = useState(false);

  function toggleModal(e) {
    e.preventDefault();
    setModal(!modal);
    console.log(modal);
  }

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
      {modal && <CategoryModal modal={modal} toggleModal={toggleModal} />}

      <div className="flex flex-row justify-between items-center">
        <a href="/categories">
          <p className="font-bold text-3xl p-2">Categories</p>
        </a>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => toggleModal(e)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />

        </svg>
      </div>
      <hr />
      <br />
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-center items-center">
        {groups.slice(page * batch, (page + 1) * batch).map((group) => {
          const img = getRandomInt(7);
          return (
            <Link to="/category" className="bg-slate-700 text-white rounded flex flex-col" key={group}>
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

function CategoryModal({ modal, toggleModal }) {
  return (
    <div className="h-screen w-full absolute">
      <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed mt-60 right-0 left-0 lg:ml-96 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
              <svg className="w-5 h-5" onClick={(e) => toggleModal(e)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create a new Category</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="p-4">Category Name</span>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                  </label>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <span className="p-4">Category Description</span>
                    <input type="text" placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </label>
                </div>
                <button type="submit" onClick={(e) => toggleModal(e)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Categories.defaultProps = {
  batch: 4,
};

Categories.propTypes = {
  batch: PropTypes.number,
};

CategoryModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Categories;
