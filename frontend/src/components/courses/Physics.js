/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from '../common/Navbar';
import AddNote from '../common/AddNote';
import Note from '../common/Note';

export default function Physics({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="">
      <Navbar title="Physics notes" />
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
