/* eslint-disable global-require */
import React from 'react';
import '../input.css';
import { Link } from 'react-router-dom';
import Navbar from '../template/Navbar.js';

function LandingPage() {
  return (
    <div>
      <Navbar value="Home" />
      <h2 className="text-3xl absolute top-32 left-36 border rounded-md border-slate-800 bg-sky-800 text-white">My notes</h2>
      {/* <div className="absolute top-72 left-56 font-semibold"> */}
      <div className="absolute top-1/4 left-10">
        <div className="flex justify-center gap-10 flex-wrap">
          <Link to="/chemistry" className="text-center mr-16 bg-slate-800 text-white rounded">
            Chemistry
            <img src={require('../imgs/pic1.jpg')} alt="chemistry study group" className="w-96 h-60 rounded" />
          </Link>

          <Link to="/math" className="inline-block text-center mr-16 bg-slate-800 text-white rounded">
            Math
            <img src={require('../imgs/pic2.jpg')} alt="math study group" className="w-96 h-60 rounded" />
          </Link>

          <Link to="/programming" className="inline-block text-center mr-16 bg-slate-800 text-white rounded">
            Programming
            <img src={require('../imgs/pic3.jpg')} alt="programming study group" className="w-96 h-60 rounded" />
          </Link>

          <Link to="/english" className="inline-block text-center mr-16 bg-slate-800 text-white rounded">
            English
            <img src={require('../imgs/pic4.jpg')} alt="english study group" className="w-96 h-60 rounded" />
          </Link>

          <Link to="/physics" className="inline-block text-center mr-16 bg-slate-800 text-white rounded">
            Physics
            <img src={require('../imgs/pic5.jpg')} alt="physics study group" className="w-96 h-60 rounded" />
          </Link>

          <Link to="/grammar" className="inline-block text-center mr-16 bg-slate-800 text-white rounded">
            Grammar
            <img src={require('../imgs/pic6.jpg')} alt="grammar study group" className="w-96 h-60 rounded" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
