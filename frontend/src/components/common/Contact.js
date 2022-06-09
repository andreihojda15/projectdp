/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Contact() {
  return (
    <div className="text-center text-white w-4/5 h-fit p-4 bg-blue-500 rounded">
      <div className="grid 3xl:grid-rows-2 md:gap-4 md:divide-x md:grid-cols-2 justify-center items-center">
        <div>
          <h1 className="text-xl font-bold">Contact Us!</h1>
          <br />
          <p>We are looking forward to hearing your feedback!</p>
          <br className="md:hidden" />
          <p>
            If you hate forms, you can contact us by e-mail at
            {' '}
            <span className="font-italic hover:underline hover:cursor-pointer">notes@contact.com</span>
          </p>
        </div>
        <hr className="md:hidden my-3" />
        <div className="md:mt-4">
          <form className="flex flex-col items-center align-center">
            <div className="inline-flex md:mb-6 mb-2">
              <label className="flex flex-row block text-grey-700 text-sm font-bold mb-2">
                <p className="mr-6">Email</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-900" type="text" />
              </label>
            </div>
            <div className="inline-flex md:mb-6 mb-2">
              <label className="flex flex-row block text-grey-700 text-sm font-bold mb-2">
                <p className="mr-2">Message</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-900 h-40" type="text" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
