import Link from 'next/link';
import React, { useState } from 'react';

function Nav({ classname, children }) {
  const [menuVisible, setShowMenu] = useState(true);
  return (
    <div className="flex flex-row flex-wrap items-center justify-between bg-blue-500 cursor-pointer ">
      <Link href="/">
        <h1 className="p-5 font-bold tracking-widest text-gray-100">
          {`Chore Watch`.toUpperCase()}
        </h1>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={() => setShowMenu(!menuVisible)}
          className="flex items-center px-3 py-2 mr-5 text-gray-100 border border-gray-100 rounded hover:text-white hover:border-white"
          type="button">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-row flex-wrap w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          menuVisible ? 'hidden' : ''
        }`}>
        <div className="flex flex-col py-2 text-sm text-gray-100  lg:flex-grow lg:flex lg:flex-row lg:justify-end lg:tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Nav;
