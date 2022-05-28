/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import AddNote from '../common/AddNote';
import Navbar from '../common/Navbar';
import Note from '../common/Note';

export default function Chemistry({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div>
      <Navbar title="Chemistry notes" />
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
