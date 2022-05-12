import React from 'react';
import '../input.css';

export default function RegForm() {
  return (
    <div className="absolute top-1/4 w-full flex justify-center">
      <form>
        <label htmlFor="first" className="py-3 block">
          First name:
          <input type="text" id="first" className="border border-black rounded block w-60" />
        </label>
        <label htmlFor="last" className="py-3 block">
          Last name:
          <input type="text" id="last" className="border border-black rounded block w-60" />
        </label>
        <label htmlFor="email" className="py-3 block">
          Email address:
          <input type="text" id="email" className="border border-black rounded block w-60" />
        </label>
        <label htmlFor="phone" className="py-3 block">
          Phone number:
          <input type="text" id="phone" className="border border-black rounded block w-60" />
        </label>
        <label htmlFor="password" className="py-3 block">
          Password:
          <input type="password" id="password" className="border border-black rounded block w-60" />
        </label>
        <input type="submit" className="bg-white border border-black w-20 mt-4 rounded relative left-1/3" value="Sign in" />
      </form>
    </div>
  );
}
