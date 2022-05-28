/* eslint-disable react/prop-types */
import { React, useState } from 'react';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="bg-[#67d7cc] rounded-xl p-4 min-h-[350px] flex flex-col justify-between">
      <textarea
        rows="11"
        col="10"
        placeholder="Type to add a note..."
        className="bg-[#67d7cc] outline-none resize-none"
        value={noteText}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-[#e1e1e1] w-14 rounded-md m-auto"
        onClick={handleSaveClick}
      >
        Save

      </button>
    </div>
  );
}

export default AddNote;
