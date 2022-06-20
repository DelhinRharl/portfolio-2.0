import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="bg-black  items-center ">
    <div>
      <img src="i.png" alt="img" />
    </div>
    <ul className="text-white flex justify-end gap-6 p-2  ">
      <li className="hover:text-amber-500 cursor-pointer">
        <Link to="/"> Home </Link>
        {' '}

      </li>
      <li className="hover:text-amber-500 cursor-pointer ">
        <Link to="/about"> About </Link>
        {' '}
        {' '}
        {' '}

      </li>
      <li className="hover:text-amber-500 cursor-pointer">
        <Link to="/services"> Services </Link>
        {' '}
        {' '}
        {' '}

      </li>
      <li className="hover:text-amber-500 cursor-pointer">
        <Link to="/projects"> Projects </Link>
        {' '}
        {' '}
        {' '}

      </li>
      <li className="hover:text-amber-500 cursor-pointer">
        <Link to="/contacts"> Contacts </Link>
        {' '}
        {' '}
        {' '}

      </li>
    </ul>
  </div>
);

export default Navbar;
