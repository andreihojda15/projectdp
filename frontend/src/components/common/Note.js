import React from 'react';
import { Link } from 'react-router-dom';

export default function Note() {
  return (
    <div className="flex justify-center flex-row">
      <div className="relative top-10 w-96 bg-yellow-100 rounded">
        <textarea rows={1} placeholder="Title" className="w-96 resize-none rounded bg-yellow-100 outline-none" />
        <textarea rows={10} placeholder="Type a note" className="w-96 resize-none bg-yellow-100 outline-none" />
        <div className="flex justify-center">
          <Link to="/">
            <button type="button" className="border bg-yellow-100 rounded-xl border-yellow-300 w-20 hover:bg-yellow-300 mb-1 mr-2">Go back</button>
          </Link>
          <button type="button" className="border bg-yellow-100 rounded-xl border-yellow-300 w-20 hover:bg-yellow-300 mb-1">Save</button>
        </div>
      </div>

    </div>
  );
}
