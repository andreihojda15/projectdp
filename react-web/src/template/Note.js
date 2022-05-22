import React from 'react';
import { Link } from 'react-router-dom';

export default function Note() {
  return (
    <div className="flex justify-center flex-row">
      <div className="relative top-10 w-96 border-black rounded">
        <textarea rows={1} placeholder="Title" className="w-96 border border-black rounded outline-none" />
        <textarea rows={20} placeholder="Type a note" className="w-96 border-black border rounded outline-none" />
        <div className="flex justify-center">
          <Link to="/">
            <button type="button" className="border bg-cyan-600 text-white rounded-xl w-20 hover:bg-cyan-700 mb-1 mr-2">Go back</button>
          </Link>
          <button type="button" className="border bg-cyan-600 text-white rounded-xl w-20 hover:bg-cyan-700 mb-1">Save</button>
        </div>
      </div>
    </div>
  );
}
