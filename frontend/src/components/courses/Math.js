import React from 'react';
import Navbar from '../common/Navbar';
import Note from '../common/Note';

export default function Math() {
  return (
    <div className="">
      <Navbar value="Math notes" />
      <div className="flex justify-center gap-10">
        <Note />
      </div>
    </div>
  );
}
