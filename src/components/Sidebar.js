import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button type="button"
    className="toggle" 
     onClick={() => setIsOpen(!isOpen)}>
      <span className="material-symbols-outlined">
      {isOpen ? 'toggle_on' : 'toggle_off'}
      </span>
    </button>
  <nav className={`sidebar  ${ isOpen ? 'sidebar-open' :'sidebar-closed'}`}>
    ;
    <ul>
      <li>
        <a href="#about">Home</a>
      </li>
      <li>
        <a href="#skills">About</a>
      </li>
      <li>
        <a href="#skills">Services</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  </>
  )
};

export default Sidebar;
