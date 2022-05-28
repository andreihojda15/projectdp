/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

export default function Note({
  id, text, date, handleDeleteNote,
}) {
  return (
    <div className="bg-yellow-100 rounded-xl p-4 min-h-[350px] flex flex-col justify-between">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <img
          src={require('../../imgs/trash-can.png')}
          alt="delete note"
          className="w-6 hover:cursor-pointer"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};
