import React from 'react';
import Navbar from '../common/Navbar';
import Note from '../common/Note';

export default function Physics() {
  return (
    <div className="">
      <Navbar value="Physics notes" />
      <div className="flex justify-center gap-10">
        <Note />
      </div>
    </div>
  );
}
