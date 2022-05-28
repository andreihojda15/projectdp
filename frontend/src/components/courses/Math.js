/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from '../common/Navbar';
import Note from '../common/Note';
import AddNote from '../common/AddNote';

export default function Math({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="">
      <Navbar title="Math notes" />
      <div className="grid gap-4 grid-cols-auto-fit pt-5">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}
