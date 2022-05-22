import React from 'react';
import Navbar from '../template/Navbar';
import '../input.css';
import Note from '../template/Note';

export default function Grammar() {
  return (
    <div className="">
      <Navbar value="Grammar notes" />
      <div className="flex justify-center gap-10">
        <Note />
      </div>
    </div>
  );
}
