import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faBars} />;

const Navbar = () => (
  <div className="nav">
    <div className="ham">
      {element}
    </div>
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
