import React from 'react';
import Navbar from '../common/Navbar';
import Note from '../common/Note';

export default function Programming() {
  return (
    <div className="">
      <Navbar value="Programming notes" />
      <div className="flex justify-center gap-10">
        <Note />
      </div>
    </div>
  );
}
