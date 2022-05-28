/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './common/Navbar.js';

function LandingPage() {
  function getRandomInt(max) {
    const res = Math.floor(Math.random() * max);
    if (res === 0) {
      return 1;
    }
    return res;
  }
  return (
    <div>
      <Navbar title="Home" />
      <h2 className="text-3xl absolute top-32 left-36 border rounded-md border-slate-800 bg-sky-800 text-white">My notes</h2>
      {/* <div className="absolute top-72 left-56 font-semibold"> */}
      <div className="absolute top-1/4 left-10">
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            ['Chemistry', '/chemistry'],
            ['Math', '/math'],
            ['English', '/english'],
            ['Programming', '/programming'],
            ['Physics', '/physics'],
            ['Grammar', '/grammar'],
          ].map(([subject, url]) => {
            const img = getRandomInt(11);
            return (
              <Link to={url} className="text-center mr-16 bg-slate-800 text-white rounded" key={subject}>
                {subject}
                <img src={require(`../imgs/pic${img}.jpg`)} alt={subject} className="w-96 h-60 rounded" />
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
