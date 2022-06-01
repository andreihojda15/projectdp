import React from 'react';
import PropTypes from 'prop-types';

function NotePage({ status }) {
  return (
    <>
      {status === 'new' ? (
        <div className="flex flex-row w-4/5 items-center justify-start mb-10 p-4">
          <span className="font-bold text-2xl mr-5">STATUS: </span>
          <span className="bg-green-100 text-green-800 font-bold text-2xl px-2.5 py-0.5 rounded">Creating</span>
        </div>
      ) : (
        <div className="flex flex-row w-4/5 items-center justify-start mb-10 p-4">
          <span className="font-bold text-2xl mr-5">STATUS: </span>
          <span className="bg-yellow-100 text-yellow-800 font-bold text-2xl mr-2 px-2.5 py-0.5 rounded">Editing</span>
        </div>
      )}
      <div className="w-4/5 flex flex-col justify-center items-center bg-yellow-100 rounded">
        <div className="w-4/5 border-b-2 border-black flex flex-row items-center justify-center py-5 text-xl">
          <textarea rows={1} placeholder="Title" className="text-center font-bold resize-none bg-yellow-100 outline-none overflow-hidden" maxLength="20" />
        </div>
        <div className="w-4/5 border-b-2 border-black">
          <textarea placeholder="Type a note" className="w-full p-10 bg-yellow-100 overflow-x-auto outline-none b-bottom" />
        </div>
        <div className="flex justify-center p-5">
          <button className="text-white bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 rounded" type="button">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

NotePage.defaultProps = {
  status: '',
};

NotePage.propTypes = {
  status: PropTypes.string,
};

export default NotePage;
