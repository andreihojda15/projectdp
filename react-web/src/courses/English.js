import React from 'react';
import Navbar from '../template/Navbar';
import '../input.css';
import Note from '../template/Note';

export default function English() {
  return (
    <div className="">
      <Navbar value="English notes" />
      <div className="flex justify-center gap-10">
        <Note />
      </div>
    </div>
  );
}
