import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navi">
    <ul className="">
      <li className="">
        <Link to="/"> Home </Link>
        {' '}

      </li>
      <li className="">
        <Link to="/about"> About </Link>
        {' '}
        {' '}
        {' '}

      </li>
      <li className="">
        <Link to="/services"> Services </Link>
        {' '}
        {' '}
        {' '}

      </li>
      <li className="">
        <Link to="/projects"> Projects </Link>
        {' '}
        {' '}
        {' '}

      </li>
      <li className="">
        <Link to="/contacts"> Contacts </Link>
        {' '}
        {' '}
        {' '}

      </li>
    </ul>

  </div>
);

export default Navbar;
