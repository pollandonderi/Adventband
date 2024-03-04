// Navbar.js
import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="nav">
      <ul className='flex justify-between px-3 '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Page1">pLinkge 1</Link></li>
        <li><Link to="/Page2">pLinkge 2</Link></li>
        <li><Link to="/Page3">pLinkge 3</Link></li>
      </ul>
    </nav>
  );
}
