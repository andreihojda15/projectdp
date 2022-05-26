import React from 'react';
import Navbar from '../common/Navbar';
import Note from '../common/Note';

export default function Chemistry() {
  return (
    <div className="">
      <Navbar value="Chemistry notes" />
      <div className="flex justify-center gap-10">
        <Note />
      </div>
    </div>
  );
}
